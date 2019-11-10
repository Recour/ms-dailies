export const COMPLETE_DAILY = 'COMPLETE_DAILY'
export const RESET_DAILY = 'RESET_DAILY'
export const TOGGLE_DAILY = 'TOGGLE_DAILY'

export function completeDaily(daily) {
    return {
        type: COMPLETE_DAILY,
        daily
    }
}

export function resetDaily(daily) {
    return {
        type: RESET_DAILY,
        daily
    }
}

export function toggleDaily(daily) {
    return {
        type: TOGGLE_DAILY,
        daily
    }
}