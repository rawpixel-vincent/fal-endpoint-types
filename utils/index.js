/**
 * For type inference. Does not check if the endpoint id is valid.
 * Just infer the type of the returned value.
 * Use as a workaround where types are broken.
 * @param {any} endpointId
 * @returns {endpointId is fal.Endpoint}
 */
export function isFalEndpoint(endpointId) {
    return typeof endpointId === 'string';
}
