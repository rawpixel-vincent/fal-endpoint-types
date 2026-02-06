/// <reference types="./endpoints/index.d.ts" />

declare global {
    export namespace fal {
        export type Endpoint = keyof fal.endpoints.Endpoints;
        export type EndpointInput<T extends fal.Endpoint> =
            T extends keyof fal.endpoints.Endpoints ? fal.endpoints.Endpoints[T]['input'] : never;
        export type EndpointOutput<T extends keyof fal.endpoints.Endpoints> =
            T extends keyof fal.endpoints.Endpoints ? fal.endpoints.Endpoints[T]['output'] : never;

        /** Show all possible output properties for a set of endpoints. */
        export type EndpointsOutputsCombined<
            E extends fal.Endpoint,
            T extends readonly fal.Endpoint[] = readonly [E, ...(readonly E[])],
            O extends Partial<{ [key: string]: any }> = Partial<{ [key: string]: never }>,
        > =
            T extends readonly [infer M, ...infer R] ?
                O &
                    (M extends keyof fal.endpoints.Endpoints ? Partial<fal.EndpointOutput<M>>
                    :   never) &
                    (R extends readonly [] ?
                        EndpointsOutputsCombined<
                            E,
                            readonly Exclude<R[number], M>[],
                            O &
                                (M extends keyof fal.endpoints.Endpoints ?
                                    Partial<fal.EndpointOutput<M>>
                                :   never)
                        >
                    :   O)
            :   never;
    }
}

export {};
