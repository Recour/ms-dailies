import { combineReducers } from 'redux'
import completedObjectivesReducer from './completedObjectivesReducer'
import disabledObjectivesReducer from './disabledObjectivesReducer'
import globalSnackbarReducer from './globalSnackbarReducer'
import timeReducer from './timeReducer'

const reducer = combineReducers({
    completedObjectives: completedObjectivesReducer,
    disabledObjectives: disabledObjectivesReducer,
    globalSnackbar: globalSnackbarReducer,
    time: timeReducer
})

export default reducer