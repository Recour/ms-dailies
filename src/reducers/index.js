import { combineReducers } from 'redux'
import objectivesReducer from './objectives'
import timeReducer from './time'

const reducer = combineReducers({
    objectives: objectivesReducer,
    time: timeReducer
})

export default reducer