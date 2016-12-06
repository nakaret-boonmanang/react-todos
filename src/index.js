import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import { setNextTodoId } from './actions'
import {persistStore, autoRehydrate} from 'redux-persist'
import './index.css'

// create store with redux devtools extension
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), autoRehydrate())
persistStore(store, {}, () => {
	// get the latest persisted state
	var state = store.getState()
	// get the latest todo
	var todo = state.todos[state.todos.length-1]
	if(todo){
		// set initial todo id
		setNextTodoId(todo.id)
	}
})

render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
)
