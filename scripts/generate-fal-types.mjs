#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync, execSync } from 'node:child_process';
import {
    appendFileSync,
    mkdirSync,
    readFileSync,
    renameSync,
    rmSync,
    writeFileSync,
} from 'node:fs';

/** @type {Map<string & {_b?:'hash'}, (string & {_b?:'componentName'})[]>} */
let componentsSigned = new Map();

/** @type {Set<string & {_b?:'name'}>} */
let names = new Set();
/** @type {Map<string & {_b?:'hash'}, string & {_b?:'uniqueComponentName'}>} */
let uniqueComponentNames = new Map();

/** @type {Array<[string & {_b?:'endpointId'}, string & {_b?:'content'}]>} */
const indexFileParts = [];
/** @type {Array<[string & {_b?:'endpointId'}, string & {_b?:'content'}]>} */
const schemaFileParts = [];
/** @type {Array<[string & {_b?:'uniqueComponentName'}, string & {_b?:'content'}]>} */
const componentsFileParts = [];

/**
 * @param {string} prefix
 * @param {number} [len]
 * @returns {string & {_b?:'uniqueComponentName'}}
 */
const getUniqueComponentName = (prefix, len = 3) => {
    let name = prefix;
    if (names.has(name)) {
        let firstPart = `000${Math.floor(Math.random() * 466566).toString(36)}`.slice(-3);
        let randPart = `000${Math.floor(Math.random() * 466566).toString(36)}`.slice(-3);
        let secondPart = `000${(Date.now() * 10).toString(36)}`.slice(-4);

        name = `${name}_${firstPart.concat(randPart).concat(secondPart).slice(0, len)}`;
        return getUniqueComponentName(name, len + 1);
    }
    names.add(name);
    return name;
};

/**
 * @param {() => Promise<any>} fn
 * @param {boolean|((...args: any[]) => boolean)} [shouldRetry]
 * @param {number|((...args: any[]) => number)} [delayMs]
 * @param {number} [maxRetries]
 * @param {number} [_attempts]
 */
const withRetries = async (
    fn,
    /** Default to 3 attempts, if the last attempt fail it throws the original error. */
    maxRetries = 3,
    /** Optional function that receive the error and return a boolean indicating if the function should be retried. */
    shouldRetry = true,
    delayMs = undefined,
    _attempts = 0
) => {
    try {
        return await fn();
    } catch (e) {
        const doRetry =
            _attempts < maxRetries &&
            (typeof shouldRetry !== 'function' ?
                shouldRetry !== false
            :   shouldRetry(e, fn, _attempts + 1, maxRetries, delayMs));
        if (!doRetry) {
            throw e;
        }
        const delay =
            typeof delayMs === 'number' ? delayMs
            : typeof delayMs === 'function' ? delayMs(_attempts + 1)
            : Math.min(1000, 500 * Math.min(2, _attempts + 1));
        if (delay >= 1) {
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        return withRetries(fn, maxRetries, shouldRetry, delayMs, _attempts + 1);
    }
};

/**
 * @param {string} endpointId
 * @param {number} [waitTime]
 */
const doEndpoint = async (endpointId, waitTime = 0, onlyComponents = false) => {
    if (waitTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTime * 100));
    }
    const url = `https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=${endpointId}`;
    const json = await withRetries(
        async () => await fetch(url).then((res) => res.json()),
        10,
        undefined,
        3000
    );
    if (
        !json?.paths?.[`/${endpointId}`]?.post?.requestBody?.content?.['application/json']?.schema
    ) {
        console.log(`- Skipping ${endpointId} because it has no input type`);
        return;
    }
    // console.log(JSON.stringify(json, null, 2));
    const inputType =
        json.paths[`/${endpointId}`].post.requestBody.content['application/json'].schema;
    const outputType =
        json.paths[`/${endpointId}/requests/{request_id}`].get.responses['200'].content[
            'application/json'
        ].schema;
    const inputTypeName = inputType['$ref'].split('/').pop();
    // console.log(inputTypeName);
    const outputTypeName = outputType['$ref'].split('/').pop();
    // console.log(outputTypeName);
    let prefixTypeName =
        endpointId.split('/')[0] !== 'fal-ai' ?
            endpointId
                .split('/')[0]
                .replace(/[^a-zA-Z0-9_]+/g, '')
                .replace(/^[0-9]+/, '')
        :   '';
    if (prefixTypeName) {
        prefixTypeName = `${prefixTypeName.charAt(0).toUpperCase()}${prefixTypeName.slice(1).toLowerCase()}`;
    }

    if (waitTime > 0) {
        await new Promise((resolve) => setTimeout(resolve, waitTime * 100));
    }

    let output = null;
    try {
        output = await withRetries(
            async () =>
                new Promise((resolve, reject) => {
                    try {
                        const r = execSync(
                            `npx -y openapi-typescript "${url}" --root-types --root-types-no-schema-prefix --path-params-as-types --alphabetize `
                        );
                        resolve(r);
                    } catch (err) {
                        reject(err);
                    }
                }),
            10,
            (err) => !err?.message?.includes?.('resolve $ref'),
            3000
        );
    } catch (err) {
        console.log(`- Skipping ${endpointId} because it failed to generate output`);
        return;
    }
    // console.log(output.toString());
    const outputJson = output.toString().replaceAll(' | null', '');
    let isInComponents = false;
    let inputTypeDefinition = '';
    let isInInputType = false;
    let lastCommentSetDefault = false;
    let outputTypeDefinition = '';
    let isInOutputType = false;
    let currentComponentName = '';
    let currentComponentIndent = 0;
    let done = false;
    // console.log(outputJson);
    const components = new Map();
    for (let line of outputJson.split('\n')) {
        if (line.includes('export interface components {')) {
            isInComponents = true;
            continue;
        }
        if (isInComponents) {
            if (line.includes('schemas: {')) {
                continue;
            }
            if (
                !(line.trim().startsWith('/*') || line.trim().startsWith('*')) &&
                line.includes('export ')
            ) {
                isInComponents = false;
            }

            if (currentComponentName) {
                if (line.trim().startsWith('/*') || line.trim().startsWith('*')) {
                    if (line.trim().startsWith('/*')) {
                        lastCommentSetDefault = false;
                    }
                    if (line.includes('@default')) {
                        lastCommentSetDefault = true;
                    }
                    components.set(
                        currentComponentName,
                        `${components.get(currentComponentName)}\n${line}`
                    );
                    continue;
                }
                if (line.includes('};') || line.includes('}];') || line.includes('}[];')) {
                    if (currentComponentIndent > 0) {
                        currentComponentIndent--;
                        components.set(
                            currentComponentName,
                            `${components.get(currentComponentName)}\n${line}`
                        );
                        continue;
                    }
                    if (lastCommentSetDefault && line.includes(': ') && !line.includes('?: ')) {
                        line = line.replace(': ', '?: ');
                        lastCommentSetDefault = false;
                    }
                    components.set(
                        currentComponentName,
                        `${components.get(currentComponentName)}\n}`
                    );
                    currentComponentName = '';
                } else {
                    if (line.trim().endsWith('{')) {
                        currentComponentIndent++;
                    }
                    if (lastCommentSetDefault && line.includes(': ') && !line.includes('?: ')) {
                        line = line.replace(': ', '?: ');
                        lastCommentSetDefault = false;
                    }
                    components.set(
                        currentComponentName,
                        `${components.get(currentComponentName)}\n${line}`
                    );
                }
            } else if (line.trim().endsWith(': {')) {
                // console.log('componentLine?', `${line}`);
                currentComponentName = line.split(': {')[0].trim().replace(/["]+/g, '');
                // console.log('currentComponentName?', `${currentComponentName}`);
                components.set(currentComponentName, `{\n`);
            } else {
                // console.log('line?', `${line}`);
            }
        } else if (components.size > 0) {
            // console.log('components.size > 0 ignored line?', `${line}`);
        }
    }

    const componentNames = Array.from(components.keys());
    // console.log('componentNames', componentNames);
    for (let t = 0; t < 3; t++) {
        for (let [componentName, componentDefinition] of components.entries()) {
            let updatedDef = componentDefinition;
            for (const ref of componentNames) {
                if (componentDefinition.includes(`components["schemas"]["${ref}"]`)) {
                    // console.log('ref', ref, 'updatedDef', componentName);
                    updatedDef = updatedDef.replaceAll(
                        `components["schemas"]["${ref}"]`,
                        components.get(ref)
                    );
                }
            }
            components.set(componentName, updatedDef);
        }
    }

    /** @type {Map<string & {_b?:'componentName'}, string & {_b?:'hash'}>} */
    const localComponents = new Map();
    for (const [componentName, componentDefinition] of components.entries()) {
        if ([inputTypeName, outputTypeName, 'QueueStatus'].includes(componentName)) {
            continue;
        }
        const safeComponentName = componentName
            .replace(/[^a-zA-Z0-9_]+/g, '')
            .replace(/^[0-9]+/, '');
        const formattedDefinition = execFileSync(
            'npx',
            ['-y', 'prettier', '--parser', 'typescript'],
            {
                input: `export interface ${safeComponentName} ${componentDefinition}`,
            }
        ).toString();
        // console.log('formattedDefinition', formattedDefinition);
        const hash = createHash('sha256').update(formattedDefinition).digest('hex');
        /** @type {string & {_b?:'uniqueComponentName'}} */
        // @ts-ignore
        const uniqueComponentName =
            uniqueComponentNames.has(hash) ?
                uniqueComponentNames.get(hash)
            :   uniqueComponentNames.set(hash, getUniqueComponentName(safeComponentName)).get(hash);
        if (!componentsSigned.has(hash)) {
            // await appendFileSync(
            //     `types/fal/endpoints/components.next.d.ts`,
            //     `\n\nexport interface ${uniqueComponentName} ${componentDefinition}\n\n`
            // );
            componentsFileParts.push([
                uniqueComponentName,
                `\n\nexport interface ${uniqueComponentName} ${componentDefinition}\n\n`,
            ]);
            componentsSigned.set(hash, [componentName]);
        } else {
            // @ts-ignore
            componentsSigned.get(hash).push(componentName);
        }
        // @ts-ignore
        localComponents.set(componentName, hash);
    }

    if (onlyComponents) {
        return;
    }
    isInInputType = false;
    isInOutputType = false;
    isInComponents = false;
    currentComponentName = '';
    currentComponentIndent = 0;
    lastCommentSetDefault = false;

    for (let line of outputJson.split('\n')) {
        if (done) {
            break;
        }
        if (isInComponents) {
            if (
                !line.trim().startsWith('/*') &&
                !line.trim().startsWith('*') &&
                line.includes('export ')
            ) {
                isInComponents = false;
            }
            if (isInInputType) {
                if (line.trim().startsWith('/*') || line.trim().startsWith('*')) {
                    if (line.trim().startsWith('/*')) {
                        lastCommentSetDefault = false;
                    }
                    if (line.includes('@default')) {
                        lastCommentSetDefault = true;
                    }
                    inputTypeDefinition += `${line}\n`;
                    continue;
                }
                if (line.includes('};') || line.includes('}];') || line.includes('}[];')) {
                    if (currentComponentIndent > 0) {
                        currentComponentIndent--;
                        inputTypeDefinition += `${line}\n`;
                        continue;
                    }
                    inputTypeDefinition += '}\n';
                    isInInputType = false;
                } else {
                    if (line.includes(`components["schemas"]["`)) {
                        let updatedLine = line;
                        for (const [componentName, hash] of localComponents.entries()) {
                            if (line.includes(`components["schemas"]["${componentName}"]`)) {
                                updatedLine = updatedLine.replace(
                                    `components["schemas"]["${componentName}"]`,
                                    `Components.${uniqueComponentNames.get(hash)}`
                                );
                            }
                        }
                        line = updatedLine;
                    }
                    if (line.trim().endsWith('{')) {
                        currentComponentIndent++;
                    }
                    if (lastCommentSetDefault && line.includes(': ') && !line.includes('?: ')) {
                        line = line.replace(': ', '?: ');
                        lastCommentSetDefault = false;
                    }
                    inputTypeDefinition += `${line}\n`;
                }
            } else if (line.includes(`${inputTypeName}:`) || line.includes(`"${inputTypeName}":`)) {
                inputTypeDefinition = `export interface ${prefixTypeName}${inputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')} {\n`;
                isInInputType = true;
                continue;
            }
            if (isInOutputType) {
                if (line.trim().startsWith('/*') || line.trim().startsWith('*')) {
                    if (line.trim().startsWith('/*')) {
                        lastCommentSetDefault = false;
                    }
                    if (line.includes('@default')) {
                        lastCommentSetDefault = true;
                    }
                    outputTypeDefinition += `${line}\n`;
                    continue;
                }
                if (line.includes('};') || line.includes('}];') || line.includes('}[];')) {
                    if (currentComponentIndent > 0) {
                        currentComponentIndent--;
                        outputTypeDefinition += `${line}\n`;
                        continue;
                    }
                    outputTypeDefinition += '}\n';
                    isInOutputType = false;
                } else {
                    if (line.includes(`components["schemas"]["`)) {
                        let updatedLine = line;
                        for (const [componentName, hash] of localComponents.entries()) {
                            if (line.includes(`components["schemas"]["${componentName}"]`)) {
                                updatedLine = updatedLine.replace(
                                    `components["schemas"]["${componentName}"]`,
                                    `Components.${uniqueComponentNames.get(hash)}`
                                );
                            }
                        }
                        line = updatedLine;
                    }
                    if (line.trim().endsWith('{')) {
                        currentComponentIndent++;
                    }
                    if (lastCommentSetDefault && line.includes(': ') && !line.includes('?: ')) {
                        line = line.replace(': ', '?: ');
                        lastCommentSetDefault = false;
                    }
                    outputTypeDefinition += `${line}\n`;
                }
            } else if (
                line.includes(`${outputTypeName}:`) ||
                line.includes(`"${outputTypeName}":`)
            ) {
                outputTypeDefinition = `export interface ${prefixTypeName}${outputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')} {\n`;
                isInOutputType = true;
                continue;
            }
        }
        if (line.includes('export interface components {')) {
            isInComponents = true;
        }
    }

    schemaFileParts.push([
        endpointId,
        `

        ${inputTypeDefinition}\n\n${outputTypeDefinition}
        `,
    ]);

    indexFileParts.push([
        endpointId,
        `
              '${endpointId}': {
                input: falEndpoints.${prefixTypeName}${inputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')};
                output: falEndpoints.${prefixTypeName}${outputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')};
              };
        
          `,
    ]);
};

mkdirSync('types/fal/endpoints', { recursive: true });

let lastCompleted = 0;
if (lastCompleted === 0) {
    await rmSync('types/fal/endpoints/index.next.d.ts', { force: true });
    await rmSync('types/fal/endpoints/schema.next.d.ts', { force: true });
    await rmSync('types/fal/endpoints/components.next.d.ts', { force: true });
}

// await doEndpoint('fal-ai/f-lite/texture', 0, true);

// await doEndpoint('fal-ai/gpt-image-1.5', 0, true);
// process.exit(0);

const getEndpoints = async () => {
    /** @type {Set<string>} */
    const endpoints = new Set();
    let page = 1;
    while (true) {
        const currentSize = endpoints.size;
        await fetch(`https://fal.ai/api/models?page=${page}`)
            .then((res) => /** @type {Promise<{items: {id: string}[]}>} */ (res.json()))
            .then((data) => {
                data.items.forEach((endpoint) => {
                    endpoints.add(endpoint.id);
                });
            });

        if (endpoints.size === currentSize) {
            break;
        }
        page++;
    }
    console.log(`${endpoints.size} endpoints found`);
    return Array.from(endpoints).sort((a, b) => a.localeCompare(b));
};

const generateAll = async () => {
    /** @type {string[]} */
    const endpoints = await getEndpoints();

    let i = 0;
    let promisesa = [];
    let promisesb = [];
    for (const endpoint of endpoints) {
        i += 1;
        if (i <= lastCompleted) {
            continue;
        }
        console.log(`- Generating types for ${endpoint} (${i}/${endpoints.length})`);
        if (i % 2 === 0) {
            promisesa.push(doEndpoint(endpoint, promisesa.length));
            if (promisesa.length >= 4) {
                await Promise.all([...promisesa, ...promisesb.splice(0, 1)]);
                promisesa = [];
            }
        } else {
            promisesb.push(doEndpoint(endpoint, promisesb.length > 4 ? promisesb.length - 4 : 0));
            if (promisesb.length >= 10) {
                await Promise.all(promisesb.splice(0, 5));
            }
        }
    }
    if (promisesa.length > 0) {
        await Promise.all(promisesa);
    }
    if (promisesb.length > 0) {
        await Promise.all(promisesb);
    }
    //
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`Done generating ${i} types`);

    writeFileSync(
        `types/fal/endpoints/index.next.d.ts`,
        `import type * as falEndpoints from './schema.js';

declare global {
export namespace fal {}
export namespace fal.endpoints {
export interface Endpoints {

${indexFileParts
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([_, content]) => content)
    .join('\n')}

    }
  }
}

export {};

`
    );
    writeFileSync(
        `types/fal/endpoints/schema.next.d.ts`,
        `import type * as Components from './components.js';


${schemaFileParts
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([_, content]) => content)
    .join('\n')}


export {};
`
    );

    const schemaContent = readFileSync('types/fal/endpoints/schema.next.d.ts', 'utf8');

    writeFileSync(
        `types/fal/endpoints/components.next.d.ts`,
        `

${componentsFileParts
    .filter(([uniqueComponentName]) => schemaContent.includes(`Components.${uniqueComponentName}`))
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([_, content]) => content)
    .join('\n')}

export {};

`
    );

    rmSync('types/fal/endpoints/index.d.ts', { force: true });
    rmSync('types/fal/endpoints/schema.d.ts', { force: true });
    rmSync('types/fal/endpoints/components.d.ts', { force: true });
    renameSync('types/fal/endpoints/index.next.d.ts', 'types/fal/endpoints/index.d.ts');
    renameSync('types/fal/endpoints/schema.next.d.ts', 'types/fal/endpoints/schema.d.ts');
    renameSync('types/fal/endpoints/components.next.d.ts', 'types/fal/endpoints/components.d.ts');

    execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/schema.d.ts"');
    execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/index.d.ts"');
    execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/components.d.ts"');
};

await generateAll();
