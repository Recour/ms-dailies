export const TOGGLE_OBJECTIVE_DISABLED = 'TOGGLE_OBJECTIVE_DISABLED'

export function toggleObjectiveDisabled(objectiveName, resetType) {
    return {
        type: TOGGLE_OBJECTIVE_DISABLED,
        objectiveName,
        resetType
    }
}