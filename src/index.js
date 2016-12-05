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
	var state = store.getState()
	var todo = state.todos[state.todos.length-1]
	if(todo){
		setNextTodoId(todo.id)
	}
})
// const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
	<Provider store={store}>
  		<App />
  	</Provider>,
  	document.getElementById('root')
)
