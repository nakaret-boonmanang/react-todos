import { combineReducers } from 'redux'
import todos from './todos'
import filterVisibility from './filterVisibility'
import selected from './selected'
import toggleDialog from './toggleDialog'

// All states
const todoApp = combineReducers({
	todos,
	filterVisibility,
	selected,
	toggleDialog
})

export default todoApp