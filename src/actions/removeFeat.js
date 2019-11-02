

export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function removeFeat(input) {
    return {
        type: REMOVE_FEATURE,
        payload: input
    }
}