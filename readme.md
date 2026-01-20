Fal.ai model endpoints Input and Output ts shapes.
Built from the Open API schemas provided by fal.ai.

- https://fal.ai/api/models
- https://fal.ai/api/openapi/queue/openapi.json?endpoint_id={endpointId}

**It's a drop in replacement for import('@fal-ai/client').RunOptions<'endpointId'>['input'].** (that is missing some endpoints / or incorrect types)
there's discussion in fal.ai to build the types from openapi, as soon as that's done, this repo will be archived.

```ts
const input: fal.EndpointInput<'fal-ai/hyper3d/rodin'> = {
    //  ...
};
const output: fal.EndpointOutput<'fal-ai/hyper3d/rodin'> = {
    //  ...
};
```

Usage example:

```ts
// ...
// Narrow down the endpoint id,
// to infer the type of the returned value,
// this example uses an index signature.
// The input type is infered in the function.
const FalInputs = {
    'fal-ai/flux-kontext/dev': (userInputs) => ({
        // typed FluxKontextDevInput
        prompt: typeof userInputs['prompt'] === 'string' ? userInputs['prompt'] : '',
        image_url: typeof userInputs['image_url'] === 'string' ? userInputs['image_url'] : '',
    }),
} as {
    [K in fal.Endpoint]: (userInputs: Record<string, any>) => fal.EndpointInput<K>;
};

const endpointIdString = String('fal-ai/flux-kontext/dev');
// any | undefined (best instead of all possible inputs)
const falInputAny = FalInputs[endpointIdString]?.({ prompt: 'Hello, world!' });
// FluxKreaTrainerInput | BriaVideoBackgroundRemovalInput
// | ... 100 more ... | undefined (expensive option, no benefits, not safe)
const falInputAll =
    isFalEndpoint(endpointIdString) ?
        FalInputs[endpointIdString]?.({ prompt: 'Hello, world!' })
    :   undefined;

//... Normal inference when the endpoint id is known.
const endpointId = 'fal-ai/flux-kontext/dev';
// FluxKontextDevInput | undefined
const falInput = FalInputs[endpointId]?.({ prompt: 'Hello, world!' });
```
