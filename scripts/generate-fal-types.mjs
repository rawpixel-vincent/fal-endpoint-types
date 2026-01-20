#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync, execSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

/** @type {Set<string & {_b?:'name'}>} */
let names = new Set();

/** @type {Array<[string & {_b?:'endpointId'}, string & {_b?:'content'}]>} */
const indexFileParts = [];
/** @type {Array<[string & {_b?:'endpointId'}, string & {_b?:'content'}]>} */
const schemaFileParts = [];
/** @type {Array<[string & {_b?:'uniqueComponentName'}, string & {_b?:'content'}]>} */
const componentsFileParts = [];

/**
 * @typedef {string & {_b?:'hash'}} Hash Hash of the component definition
 * @typedef {string & {_b?:'endpointId'}} EndpointId Endpoint ID
 * @typedef {string & {_b?:'componentName'}} ComponentName Component name
 * @typedef {string & {_b?:'content'}} Content type definition text
 * @typedef {string & {_b?:'uniqueComponentName'}} UniqueComponentName Unique component name
 * @typedef {readonly [EndpointId, ComponentName, Content]} ComponentInfo Component information
 * @typedef {string & {_b?:'inputTypeName'}} InputTypeName Input type name
 * @typedef {string & {_b?:'safeInputTypeName'}} SafeInputTypeName Safe input type name
 * @typedef {string & {_b?:'outputTypeName'}} OutputTypeName Output type name
 * @typedef {string & {_b?:'safeOutputTypeName'}} SafeOutputTypeName Safe output type name
 */
/** @typedef {readonly [Hash, readonly ComponentInfo[]]} ComponentsType */

/**
 * @param {string} prefix
 * @param {number} [len]
 * @returns {UniqueComponentName}
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
 * @template T
 * @param {T[]|Set<T>} arr Array or Set
 * @param {number} len
 * @param {Object} [options]
 * @param {'row'|'column'} [options.direction='column']
 * @param {boolean} [options.releaseMemory=false] default: false, Releases the memory by clearing the received array when not referenced. Useful for large arrays.
 * @returns {T[][]}
 */
export function arrayChunks(arr = [], len = 0, options = {}) {
    const { direction = 'column', releaseMemory = false } = options || {};
    const isSet = arr instanceof Set;
    if (!isSet && !Array.isArray(arr)) {
        console.error('arrayChunks: arr is not an array or set');

        return arr;
    }
    if (typeof len !== 'number' || len < 1 || !Number.isFinite(len)) {
        console.error('arrayChunks: len is not a positive integer');

        return !isSet ? [arr] : [[...arr]];
    }
    /** @type {T[][]} */
    const chunks = [];
    const length = isSet ? arr.size : arr.length;
    let index = 0;
    for (const item of arr) {
        const chunkIndex =
            !direction || direction === 'column' ? Math.trunc(index / len) : index % len;
        if (!chunks[chunkIndex]) {
            chunks[chunkIndex] = [];
        }
        chunks[chunkIndex].push(item);
        index += 1;
    }
    if (releaseMemory && !Object.isFrozen(arr)) {
        if (!isSet) {
            arr.splice(0, length);
        } else {
            arr.clear();
        }
    }
    return chunks;
}

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
 * @param {EndpointId} endpointId
 * @returns {Promise<{localPath: string, openapiJson: {paths: {[x in `/${string}`]: {post: {requestBody: {content: {['application/json']: {schema: {'$ref': string}}}}}, get: {responses: {['200']: {content: {['application/json']: {schema: {'$ref': string}}}}}}}}}}>}
 */
const getOpenapiJson = async (endpointId) => {
    const machineName = endpointId.replace(/[^a-zA-Z0-9_-]+/g, '_');
    const url = `https://fal.ai/api/openapi/queue/openapi.json?endpoint_id=${endpointId}`;
    const openapiJsonLocalPath = `build-cache/openapi-json/${machineName}.json`;
    try {
        const cachedJson = JSON.parse(
            (await readFile(openapiJsonLocalPath, 'utf8').catch(() => 'null')) || 'null'
        );
        if (
            cachedJson &&
            typeof cachedJson === 'object' &&
            cachedJson !== null &&
            Object.keys(cachedJson).length > 0
        ) {
            return { localPath: openapiJsonLocalPath, openapiJson: cachedJson };
        }
    } catch (err) {
        //
    }
    const json = await withRetries(
        async () => await fetch(url).then((res) => res.json()),
        10,
        undefined,
        3000
    );
    writeFileSync(openapiJsonLocalPath, JSON.stringify(json));
    return { localPath: openapiJsonLocalPath, openapiJson: json };
};

/**
 * @param {EndpointId} endpointId
 * @returns {Promise<{localPath: string, inputTypeName: InputTypeName | undefined, outputTypeName: OutputTypeName | undefined, outputJson: string, prefixTypeName: string}>}
 */
const getEndpointInputOutput = async (endpointId) => {
    const machineName = endpointId.replace(/[^a-zA-Z0-9_-]+/g, '_');
    const endpointInputOutputLocalPath = `build-cache/endpoints-input-output/${machineName}.json`;
    try {
        const cachedInputOutput = JSON.parse(
            (await readFile(endpointInputOutputLocalPath, 'utf8').catch(() => 'null')) || 'null'
        );
        if (
            cachedInputOutput &&
            typeof cachedInputOutput === 'object' &&
            cachedInputOutput !== null &&
            typeof cachedInputOutput.inputTypeName === 'string' &&
            typeof cachedInputOutput.outputTypeName === 'string' &&
            typeof cachedInputOutput.outputJson === 'string'
        ) {
            return {
                localPath: endpointInputOutputLocalPath,
                inputTypeName: cachedInputOutput.inputTypeName,
                outputTypeName: cachedInputOutput.outputTypeName,
                outputJson: cachedInputOutput.outputJson,
                prefixTypeName: cachedInputOutput.prefixTypeName,
            };
        }
    } catch (err) {
        //
    }
    const { localPath, openapiJson } = await getOpenapiJson(endpointId);

    if (
        !openapiJson?.paths?.[`/${endpointId}`]?.post?.requestBody?.content?.['application/json']
            ?.schema
    ) {
        console.log(`- Skipping ${endpointId} because it has no input type`);
        // @ts-ignore
        return [];
    }
    // console.log(JSON.stringify(json, null, 2));
    const inputType =
        openapiJson.paths[`/${endpointId}`]?.post?.requestBody?.content?.['application/json']
            ?.schema;
    const outputType =
        openapiJson.paths[`/${endpointId}/requests/{request_id}`]?.get?.responses['200']?.content?.[
            'application/json'
        ]?.schema;
    const inputTypeName = inputType ? inputType['$ref'].split('/').pop() : undefined;
    // console.log(inputTypeName);
    const outputTypeName = outputType ? outputType['$ref'].split('/').pop() : undefined;
    // console.log(outputTypeName);
    if (!inputTypeName && !outputTypeName) {
        console.log(`- Skipping ${endpointId} components because it has no input and output type`);
        // @ts-ignore
        return [];
    }
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

    let output = null;
    try {
        output = await withRetries(
            async () =>
                new Promise((resolve, reject) => {
                    try {
                        const r = execSync(
                            `npx -y openapi-typescript "${localPath}" --root-types --root-types-no-schema-prefix --path-params-as-types --alphabetize `
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
        console.log(`- Skipping ${endpointId} components because it failed to generate output`);
        // @ts-ignore
        return [];
    }
    // console.log(output.toString());
    const outputJson = output.toString().replaceAll(' | null', '');
    writeFileSync(
        endpointInputOutputLocalPath,
        JSON.stringify({
            inputTypeName: inputTypeName,
            outputTypeName: outputTypeName,
            outputJson: outputJson,
            prefixTypeName: prefixTypeName,
        })
    );
    return {
        localPath: endpointInputOutputLocalPath,
        inputTypeName: inputTypeName,
        outputTypeName: outputTypeName,
        outputJson: outputJson,
        prefixTypeName: prefixTypeName,
    };
};
/**
 * @param {string} endpointId
 * @returns {Promise<{components: ComponentsType, inputComponent: [InputTypeName, SafeInputTypeName, Content], outputComponent: [OutputTypeName, SafeOutputTypeName, Content]}>}
 */
const doEndpointComponents = async (endpointId) => {
    const machineName = endpointId.replace(/[^a-zA-Z0-9_-]+/g, '_');
    const endpointComponentsLocalPath = `build-cache/endpoints-components/${machineName}.json`;
    if (process.env['CACHE_ENDPOINTS']) {
        try {
            /** @type {{components: ComponentsType, inputComponent: [InputTypeName, SafeInputTypeName, Content], outputComponent: [OutputTypeName, SafeOutputTypeName, Content]}} */
            const cachedComponents = JSON.parse(
                (await readFile(endpointComponentsLocalPath, 'utf8').catch(() => 'null')) || 'null'
            );
            if (
                cachedComponents &&
                typeof cachedComponents === 'object' &&
                cachedComponents !== null &&
                cachedComponents.inputComponent &&
                cachedComponents.components &&
                Array.isArray(cachedComponents.components)
            ) {
                return {
                    inputComponent: cachedComponents.inputComponent,
                    outputComponent: cachedComponents.outputComponent,
                    components: cachedComponents.components,
                };
            }
        } catch (err) {
            //
        }
    }
    const {
        inputTypeName = '',
        outputTypeName = '',
        outputJson,
        prefixTypeName,
    } = await getEndpointInputOutput(endpointId);
    if (!inputTypeName && !outputTypeName) {
        console.log(`- Skipping ${endpointId} components because it has no input and output type`);
        return {
            // @ts-ignore
            inputComponent: [],
            // @ts-ignore
            outputComponent: [],
            // @ts-ignore
            components: [],
        };
    }
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
    /** @type {[InputTypeName, SafeInputTypeName, Content]} */
    // @ts-ignore
    let inputComponent = [];
    /** @type {[OutputTypeName, SafeOutputTypeName, Content]} */
    // @ts-ignore
    let outputComponent = [];
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
                    if (line.trim().endsWith(' unknown;')) {
                        line = line.replace(' unknown;', ' {[x:string]:any} | null;');
                    }
                    if (line.trim().endsWith(' unknown[];')) {
                        line = line.replace(' unknown[];', ' {[x:string]:any}[];');
                    }
                    if (line.trim().endsWith(': Record<string, never> | number;')) {
                        line = line.replace(
                            ' Record<string, never> | number;',
                            ' Record<string, number> | number;'
                        );
                    }
                    if (line.trim().endsWith(': Record<string, never>;')) {
                        line = line.replace(' Record<string, never>;', ' Record<string, number>;');
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
            } else if (line.trim().endsWith(': unknown;')) {
                currentComponentName = line.split(': unknown;')[0].trim().replace(/["]+/g, '');
                components.set(currentComponentName, `{ };`);
                currentComponentName = '';
                currentComponentIndent = 0;
                lastCommentSetDefault = false;
            } else if (line.trim().endsWith(': unknown[];')) {
                currentComponentName = line.split(': unknown[];')[0].trim().replace(/["]+/g, '');
                components.set(currentComponentName, `[];`);
                currentComponentName = '';
                currentComponentIndent = 0;
                lastCommentSetDefault = false;
            } else {
                // console.log('line?', `${line}`);
            }
        } else if (components.size > 0) {
            // console.log('components.size > 0 ignored line?', `${line}`);
        }
    }

    const componentNames = Array.from(components.keys());

    /** @type {Map<Hash, readonly ComponentInfo[]>} */
    const hashComponents = new Map();
    for (const componentName of componentNames) {
        if (componentName === 'QueueStatus') {
            continue;
        }
        if (componentName === inputTypeName) {
            inputComponent = [
                componentName,
                `${prefixTypeName}${inputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')}`,
                components.get(componentName),
            ];
            continue;
        }
        if (componentName === outputTypeName) {
            outputComponent = [
                componentName,
                `${prefixTypeName}${outputTypeName.replace(/[^a-zA-Z0-9_]+/g, '')}`,
                components.get(componentName),
            ];
            continue;
        }
        const safeComponentName = componentName
            .replace(/[^a-zA-Z0-9_]+/g, '')
            .replace(/^[0-9]+/, '');
        const formattedDefinition = execFileSync(
            'npx',
            ['-y', 'prettier', '--parser', 'typescript'],
            {
                input: `export interface ${safeComponentName} ${components.get(componentName)}`,
            }
        ).toString();
        // console.log('formattedDefinition', formattedDefinition);
        /** @type {Hash} */
        const hash = createHash('sha256')
            .update(formattedDefinition.replace(`export interface ${safeComponentName}`, '').trim())
            .digest('hex');
        hashComponents.set(
            hash,
            (hashComponents.get(hash) || []).concat([
                [endpointId, componentName, components.get(componentName)],
            ])
        );
    }
    const hashComponentsEntries = Array.from(hashComponents.entries());
    if (process.env['CACHE_ENDPOINTS']) {
        writeFileSync(
            endpointComponentsLocalPath,
            JSON.stringify({
                components: hashComponentsEntries,
                inputComponent: inputComponent,
                outputComponent: outputComponent,
            })
        );
    }

    return {
        // @ts-ignore
        components: hashComponentsEntries,
        // @ts-ignore
        inputComponent: inputComponent,
        // @ts-ignore
        outputComponent: outputComponent,
    };
};

const getEndpoints = async () => {
    try {
        /** @type {EndpointId[]} */
        // @ts-ignore
        const cachedEndpoints = JSON.parse(
            (await readFile('build-cache/endpoints.json', 'utf8').catch(() => 'null')) || 'null'
        );
        if (cachedEndpoints && Array.isArray(cachedEndpoints) && cachedEndpoints.length > 0) {
            return cachedEndpoints;
        }
    } catch (err) {
        //
    }
    /** @type {Set<EndpointId>} */
    const endpoints = new Set();
    let page = 1;
    while (true) {
        const currentSize = endpoints.size;
        await fetch(`https://fal.ai/api/models?page=${page}`)
            .then((res) => /** @type {Promise<{items: {id: EndpointId}[]}>} */ (res.json()))
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
    const sortedEndpoints = Array.from(endpoints).sort((a, b) => a.localeCompare(b));
    writeFileSync('build-cache/endpoints.json', JSON.stringify(sortedEndpoints, null, 2));
    return sortedEndpoints;
};

const generateComponents = async () => {
    await mkdirSync('build-cache/endpoints-components', { recursive: true });
    const endpoints = await getEndpoints();
    const slices = arrayChunks(endpoints, 150);
    let i = 0;
    const results = await Promise.all(
        slices.map(async (endpointsSlice, sliceIndex) => {
            /** @type {{endpointId: EndpointId, components: ComponentsType, inputComponent: [InputTypeName, SafeInputTypeName, Content], outputComponent: [OutputTypeName, SafeOutputTypeName, Content]}[]} */
            let localComponents = [];
            /** @type {Promise<{endpointId: EndpointId, components: ComponentsType, inputComponent: [InputTypeName, SafeInputTypeName, Content], outputComponent: [OutputTypeName, SafeOutputTypeName, Content]}>[]} */
            let promises = [];
            /** @type {number} */
            for (const endpoint of endpointsSlice) {
                if (Math.random() < 0.05) {
                    await new Promise((resolve) => setTimeout(resolve, 2500));
                }
                if (Math.random() < 0.2) {
                    await Promise.all(promises);
                    promises = [];
                }
                console.log(`- Generating components for ${endpoint} (${i}/${endpoints.length})`);
                i++;
                promises.push(
                    doEndpointComponents(endpoint).then((result) => ({
                        endpointId: endpoint,
                        ...result,
                    }))
                );
                if (promises.length >= sliceIndex + 1) {
                    const localResults = await Promise.all(promises);
                    localComponents.push(...localResults);
                    promises = [];
                }
            }
            if (promises.length > 0) {
                const localResults = await Promise.all(promises);
                localComponents.push(...localResults);
            }
            return localComponents;
        })
    );
    const flatResults = results.flat(1);
    return {
        /** @type {Map<Hash, UniqueComponentName>} */
        uniqueComponentNames: new Map(),
        components: flatResults.reduce((acc, result) => {
            for (const c of result.components) {
                /** @type {readonly [Hash, readonly ComponentInfo[]]} */
                // @ts-ignore
                const [hash, componentNames] = c;
                if (!acc.has(hash)) {
                    acc.set(hash, componentNames);
                } else {
                    acc.set(hash, (acc.get(hash) || []).concat(componentNames));
                }
            }
            return acc;
        }, /** @type {Map<Hash, readonly ComponentInfo[]>} */ (new Map())),
        mainComponents: flatResults.reduce((acc, r) => {
            acc[r.endpointId] = {
                inputComponent: r.inputComponent,
                outputComponent: r.outputComponent,
            };
            return acc;
        }, /** @type {Record<EndpointId, {inputComponent: [InputTypeName, SafeInputTypeName, Content], outputComponent: [OutputTypeName, SafeOutputTypeName, Content]}>} */ ({})),
    };
};

mkdirSync('types/fal/endpoints', { recursive: true });
mkdirSync('build-cache', { recursive: true });
mkdirSync('build-cache/endpoints-input-output', { recursive: true });
mkdirSync('build-cache/endpoints-components', { recursive: true });
mkdirSync('build-cache/openapi-json', { recursive: true });

const generatedComponents = await generateComponents();

const entries = Array.from(generatedComponents.components.entries()).sort(
    (a, b) => b[1].length - a[1].length
);
for (const [hash, componentNames] of entries) {
    // console.log('hash', hash.slice(0, 10).concat('...'));
    // console.log(
    //     'componentNames',
    //     componentNames
    //         .map(([endpointId, componentName]) => `${endpointId}/components/${componentName}`)
    //         .filter((c, i, a) => a.indexOf(c) === i)
    //         .join(', ')
    // );
    if (!generatedComponents.uniqueComponentNames.has(hash)) {
        const safeComponentName = componentNames
            .reduce(
                (acc, [, componentName]) =>
                    !acc ? componentName
                    : acc.length > componentName.length ? componentName
                    : acc,
                ''
            )
            .replace(/[^a-zA-Z0-9_]+/g, '')
            .replace(/^[0-9]+/, '');
        const uniqueComponentName = getUniqueComponentName(safeComponentName);
        generatedComponents.uniqueComponentNames.set(hash, uniqueComponentName);
    }
}

let repeat = 5;
for (let i = 0; i < repeat; i++) {
    for (const [componentHash, componentInfos] of generatedComponents.components.entries()) {
        /** @type {typeof componentInfos} */
        let localComponentInfos = [];
        for (const [endpointId, componentName, content] of componentInfos) {
            let localContent = content;
            for (let e = 0; e < repeat; e++) {
                for (const [hash, refComponentInfos] of generatedComponents.components.entries()) {
                    for (const [, refComponentName] of refComponentInfos) {
                        if (componentHash === hash) {
                            // console.log(
                            //     `- Skipping ${refComponentName} because it is the same component`
                            // );
                            continue;
                        }
                        const uniqueComponentName =
                            generatedComponents.uniqueComponentNames.get(hash);
                        if (
                            uniqueComponentName &&
                            localContent.includes(`components["schemas"]["${refComponentName}"]`)
                        ) {
                            localContent = localContent.replaceAll(
                                `components["schemas"]["${refComponentName}"]`,
                                `Components.${uniqueComponentName}`
                            );
                            // console.log(
                            //     `- Replaced ${refComponentName} with ${uniqueComponentName}`
                            // );
                        } else {
                            // console.log(
                            //     `- Skipping ${refComponentName} because it is not found in the content`
                            // );
                        }
                    }
                }
            }
            // @ts-ignore
            localComponentInfos.push([endpointId, componentName, localContent]);
        }
        generatedComponents.components.set(componentHash, localComponentInfos);
    }
}

for (const [componentHash, componentInfos] of generatedComponents.components.entries()) {
    for (const [endpointId, componentName] of componentInfos) {
        const { inputComponent, outputComponent } = generatedComponents.mainComponents[endpointId];
        if (!inputComponent[2]) {
            console.log(endpointId, componentName);
            process.exit(0);
            continue;
        }
        if (inputComponent[2].includes(`components["schemas"]["${componentName}"]`)) {
            generatedComponents.mainComponents[endpointId].inputComponent[2] =
                inputComponent[2].replaceAll(
                    `components["schemas"]["${componentName}"]`,
                    `Components.${generatedComponents.uniqueComponentNames.get(componentHash)}`
                );
            console.log(
                `- Replaced ${componentName} with ${generatedComponents.uniqueComponentNames.get(componentHash)} in input component`
            );
        }
        if (outputComponent[2].includes(`components["schemas"]["${componentName}"]`)) {
            generatedComponents.mainComponents[endpointId].outputComponent[2] =
                outputComponent[2].replaceAll(
                    `components["schemas"]["${componentName}"]`,
                    `Components.${generatedComponents.uniqueComponentNames.get(componentHash)}`
                );
            console.log(
                `- Replaced ${componentName} with ${generatedComponents.uniqueComponentNames.get(componentHash)} in output component`
            );
        }
    }
}

for (const entry of generatedComponents.uniqueComponentNames.entries()) {
    const [hash, uniqueComponentName] = entry;
    const [[, , content]] = generatedComponents.components.get(hash) || [];
    componentsFileParts.push([
        uniqueComponentName,
        content.trim() === '[];' ?
            `\n\nexport type ${uniqueComponentName} = {[x:string]:any}[];\n\n`
        :   `\n\nexport interface ${uniqueComponentName} ${content.replaceAll('Components.', '')}\n\n`,
    ]);
}

for (const [endpointId, { inputComponent, outputComponent }] of Object.entries(
    generatedComponents.mainComponents
)) {
    indexFileParts.push([
        endpointId,
        `
          '${endpointId}': {
            input: ${inputComponent[1] ? `falEndpoints.${inputComponent[1]}` : `{ [x in string]: any }`};
            output: ${outputComponent[1] ? `falEndpoints.${outputComponent[1]}` : `{ [x in string]: any }`};
          };
        `,
    ]);
    if (inputComponent[2]) {
        schemaFileParts.push([
            endpointId,
            `

            \n\nexport interface ${inputComponent[1]} ${inputComponent[2]}\n\n
            `,
        ]);
    }
    if (outputComponent[2]) {
        schemaFileParts.push([
            endpointId,
            `

            \n\nexport interface ${outputComponent[1]} ${outputComponent[2]}\n\n
            `,
        ]);
    }
}

writeFileSync(
    'types/fal/endpoints/index.d.ts',
    `import type * as falEndpoints from './schema.js';

declare global {
export namespace fal {}
export namespace fal.endpoints {
export interface Endpoints {

    ${indexFileParts
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([_, content]) => content)
        .join('\n')}
    }
  }
}

export {};

`
);
writeFileSync(
    'types/fal/endpoints/schema.d.ts',
    `import type * as Components from './components.js';

${schemaFileParts
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([_, content]) => content)
    .join('\n')}

export {};

`
);
writeFileSync(
    'types/fal/endpoints/components.d.ts',
    `
    ${componentsFileParts
        .sort((a, b) => b[0].localeCompare(a[0]))
        .map(([_, content]) => content)
        .join('\n\n')}

export {};

`
);
// await generateAll(generatedComponents);

execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/schema.d.ts"');
execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/index.d.ts"');
execSync('./node_modules/.bin/prettier --write "types/fal/endpoints/components.d.ts"');
