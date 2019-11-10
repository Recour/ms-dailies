import { combineReducers } from 'redux'
import dailies from './dailies'
import time from './time'

const reducer = combineReducers({
    dailies,
    time
})

export default reducer