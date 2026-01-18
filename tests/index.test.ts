/* eslint-disable @typescript-eslint/no-unused-vars */

import { isFalEndpoint } from '../utils/index.js';

type Expect<T> = T extends true ? true : false;
//

//

//
const test = 'fal-ai/veo3/fast';

//

//
const input: fal.EndpointInput<typeof test> = { prompt: '' };

const isInput: Expect<typeof input extends fal.EndpointInput<typeof test> ? true : false> = true;
if (!isInput) {
    console.error('Input is not of type fal.EndpointInput<typeof test>', input);
    throw new Error('Input is not of type fal.EndpointInput<typeof test>');
}
const output: fal.EndpointOutput<typeof test> = {
    video: {
        url: 'https://example.com/video.mp4',
    },
};
const isOutput: Expect<typeof output extends fal.EndpointOutput<typeof test> ? true : false> = true;
if (!isOutput) {
    console.error('Output is not of type fal.EndpointOutput<typeof test>', output);
    throw new Error('Output is not of type fal.EndpointOutput<typeof test>');
}

// ...
// Narrow down the endpoint id,
// to infer the type of the returned value,
// this example uses an index signature.
// The input type is infered in the function.
const FalInputs: {
    [x: number | string | symbol]: any;
} & {
    [K in fal.Endpoint]?: (userInputs: Record<string, any>) => fal.EndpointInput<K>;
} = {
    'fal-ai/flux-kontext/dev': (userInputs) => ({
        // typed FluxKontextDevInput
        prompt: typeof userInputs['prompt'] === 'string' ? userInputs['prompt'] : '',
        image_url: typeof userInputs['image_url'] === 'string' ? userInputs['image_url'] : '',
    }),
};

const endpointIdString = String('fal-ai/flux-kontext/dev');
// any | undefined
const falInputAny = FalInputs[endpointIdString]?.({ prompt: 'Hello, world!' });
// FluxKreaTrainerInput | BriaVideoBackgroundRemovalInput
// | ... 100 more ... | undefined
const falInputAll =
    isFalEndpoint(endpointIdString) ?
        FalInputs[endpointIdString]?.({ prompt: 'Hello, world!' })
    :   undefined;

const endpointId = 'fal-ai/flux-kontext/dev';
// FluxKontextDevInput | undefined
const falInput = FalInputs[endpointId]?.({ prompt: 'Hello, world!' });
if (!falInput) {
    console.error('Fal input is not of type fal.EndpointInput<typeof test>', falInput);
    throw new Error('Fal input is not of type fal.EndpointInput<typeof test>');
} else {
    // run
}

const isFalInput: Expect<typeof falInput extends fal.EndpointInput<typeof test> ? true : false> =
    true;
if (!isFalInput) {
    console.error('Fal input is not of type fal.EndpointInput<typeof test>', falInput);
    throw new Error('Fal input is not of type fal.EndpointInput<typeof test>');
}
