export const TOGGLE_OBJECTIVE = 'TOGGLE_OBJECTIVE'
export const RESET_ALL_OBJECTIVES = 'RESET_ALL_OBJECTIVES'

export function toggleObjective(objective, resetType) {
    return {
        type: TOGGLE_OBJECTIVE,
        objective,
        resetType
    }
}

export function resetAllObjectives(resetType) {
    return {
        type: RESET_ALL_OBJECTIVES,
        resetType
    }
}