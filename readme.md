input and output shapes exported from the openapi.json of fal.ai endpoints to typescript types.

Usage:

```ts
const input: fal.EndpointInput<'fal-ai/hyper3d/rodin'> = {
    //  ...
};
const output: fal.EndpointOutput<'fal-ai/hyper3d/rodin'> = {
    //  ...
};
```

```ts
const getMyMappedEndpointInput = (endpointId: Endpoint, userInputs: any): EndpointInput<typeof endpointId> => {
  // ...
  // Narrow down the endpoint id
  // to infer the type of the returned value
  switch (endpointId) {
    case 'fal-ai/minimax/hailuo-02/standard/text-to-video':
      return {
        prompt: userInputs.prompt, // type safe, will be infered by the narrowed endpoint id
      };
    default:
      throw new Error(`Unsupported endpoint: ${endpointId}`);
  }
}

const endpointId = req.endpointId; // 'fal-ai/minimax/hailuo-02/standard/text-to-video'
const input = getMyMappedEndpointInput(endpointId, req.userInputs);

// --------------------------

const res = await fetch('https://fal.ai/api/v1/endpoints/{endpointId}', {
    method: 'POST',
    body: JSON.stringify({
     input: {
        ...input,
    }),
}).then(res => res.json());
// check the api urls in the docs, this is just an example.
const result = await fetch('https://fal.ai/api/v1/endpoints/{endpointId}/requests/{res.requestId}', {
    method: 'GET',
}).then(res => res.json())
const output = data.data as unknown as EndpointOutput<typeof endpointId>;

// --------------------------
// OR

const res = await fal.queue.submit(endpointId, {input});

// import('@fal/client').Result<EndpointOutput<typeof endpointId>>
const result = await fal.queue.result(res.requestId);

const output = result.data as unknown as EndpointOutput<typeof endpointId>;
```
