export const TOGGLE_OBJECTIVE_COMPLETED = 'TOGGLE_OBJECTIVE_COMPLETED'
export const RESET_ALL_COMPLETED_OBJECTIVES = 'RESET_ALL_COMPLETED_OBJECTIVES'
export const TOGGLE_OBJECTIVE_DISABLED = 'TOGGLE_OBJECTIVE_DISABLED'

export function toggleObjectiveCompleted(objectiveName, resetType) {
    return {
        type: TOGGLE_OBJECTIVE_COMPLETED,
        objectiveName,
        resetType
    }
}

export function resetAllCompletedObjectives(resetType) {
    return {
        type: RESET_ALL_COMPLETED_OBJECTIVES,
        resetType
    }
}

export function toggleObjectiveDisabled(objectiveName, resetType) {
    return {
        type: TOGGLE_OBJECTIVE_DISABLED,
        objectiveName,
        resetType
    }
}