import { combineReducers } from 'redux'
import todos from './todos'
import filterVisibility from './filterVisibility'
import selected from './selected'

// All states
const todoApp = combineReducers({
	todos,
	filterVisibility,
	selected
})

export default todoApp