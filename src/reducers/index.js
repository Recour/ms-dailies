import { combineReducers } from 'redux'
import objectivesReducer from './objectives'
import timeReducer from './time'
import globalSnackbarReducer from './globalSnackbar'

const reducer = combineReducers({
    objectives: objectivesReducer,
    time: timeReducer,
    globalSnackbar: globalSnackbarReducer
})

export default reducer