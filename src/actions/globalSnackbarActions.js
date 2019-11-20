export const OPEN_GLOBAL_SNACKBAR = 'OPEN_GLOBAL_SNACKBAR'
export const CLOSE_GLOBAL_SNACKBAR = 'CLOSE_GLOBAL_SNACKBAR'

export function openGlobalSnackbar(message) {
    return {
        type: OPEN_GLOBAL_SNACKBAR,
        message
    }
}

export function closeGlobalSnackbar() {
    return {
        type: CLOSE_GLOBAL_SNACKBAR
    }
}