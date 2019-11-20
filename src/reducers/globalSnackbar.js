import _ from 'lodash';

import { 
    OPEN_GLOBAL_SNACKBAR,
    CLOSE_GLOBAL_SNACKBAR
} from '../actions/globalSnackbarActions'

var initialState = { 
    open: false,
    message: "Peek-a-boo!"
}

const globalSnackbarReducer = (state = initialState, action) => {
    const newState = _.cloneDeep(state)
    switch(action.type) {
        case OPEN_GLOBAL_SNACKBAR:
            newState.message = action.message
            newState.open = true
            break
        
        case CLOSE_GLOBAL_SNACKBAR:
            newState.open = false
            break

        default:
            break
    }

    return newState
}

export default globalSnackbarReducer