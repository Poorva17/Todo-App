import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import notification from './notification'

export default combineReducers({
    todos,
    visibilityFilter,
    notification
})
