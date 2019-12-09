

export const ADD_FEATURE = "ADD_FEATURE";

export function addFeature(input) {
    return {
        type: ADD_FEATURE,
        payload: input
    }
}