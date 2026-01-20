/// <reference types="./endpoints/index.d.ts" />

declare global {
    export namespace fal {
        export type Endpoint = keyof fal.endpoints.Endpoints | (string & {});
        export type EndpointInput<T extends fal.Endpoint> =
            T extends keyof fal.endpoints.Endpoints ? fal.endpoints.Endpoints[T]['input']
            :   { [K in string]: any };
        export type EndpointOutput<T extends fal.Endpoint> =
            T extends keyof fal.endpoints.Endpoints ? fal.endpoints.Endpoints[T]['output']
            :   { [K in string]: any };
    }
}

export {};
