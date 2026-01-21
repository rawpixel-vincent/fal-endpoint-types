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

        /** Show all possible output properties for a set of endpoints. */
        export type EndpointsOutputsCombined<
            E extends fal.Endpoint,
            T extends readonly fal.Endpoint[] = readonly [E, ...(readonly [E])],
            O extends Record<string, never> = Record<string, never>,
        > =
            T extends readonly [infer M, ...infer R extends readonly fal.Endpoint[]] ?
                R extends never ?
                    M extends fal.Endpoint ?
                        Partial<fal.EndpointOutput<M>> & O
                    :   O
                :   EndpointsOutputsCombined<
                        E,
                        R,
                        Partial<fal.EndpointOutput<M extends fal.Endpoint ? M : never>> & O
                    >
            :   O;
    }
}

export {};
