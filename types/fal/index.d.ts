/// <reference types="./endpoints/index.d.ts" />

declare global {
    export namespace fal {
        export type Endpoint = keyof fal.endpoints.Endpoints & string;
        export type EndpointInput<T extends fal.Endpoint> = fal.endpoints.Endpoints[T]['input'];
        export type EndpointOutput<T extends fal.Endpoint> = fal.endpoints.Endpoints[T]['output'];
    }
}

export {};
