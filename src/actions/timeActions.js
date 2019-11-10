export const SET_CURRENT_TIME = 'SET_CURRENT_TIME'

export function setCurrentTime(time) {
    return {
        type: SET_CURRENT_TIME,
        time
    }
}