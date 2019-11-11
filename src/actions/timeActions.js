export const SET_CURRENT_TIME = 'SET_CURRENT_TIME'
export const SET_LAST_VISIT = 'SET_LAST_VISIT'

export function setCurrentTime(time) {
    return {
        type: SET_CURRENT_TIME,
        time
    }
}

export function setLastVisit(time) {
    return {
        type: SET_LAST_VISIT,
        time
    }
}