/* eslint-disable @typescript-eslint/no-unused-vars */

type Expect<T> = T extends true ? true : false;

const test = 'fal-ai/veo3/fast';
const input: fal.EndpointInput<typeof test> = {
    prompt: '',
};

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
