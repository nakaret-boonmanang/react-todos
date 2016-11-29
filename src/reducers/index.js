import { combineReducers } from 'redux'
import todos from './todos'
import filterVisibility from './filterVisibility'

const todoApp = combineReducers({
	todos,
	filterVisibility
})

export default todoApp