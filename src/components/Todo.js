import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import RemoveTodo from '../containers/RemoveTodo'
import DoneTodo from '../containers/DoneTodo'
import { selectTodo, setToggleDialog } from '../actions'

let Todo = ({dispatch, id, completed, title}) => {
	return (
		// if want to binding dispatch must be binding by onClick={e => { // do soming}} prevent call directly
		// because it will call dispatch imidiatly not by event.
		<li>
			<span><DoneTodo id={id} completed={completed} /></span>
			<span className="todo-task">
				<a onClick={e => {
					dispatch(setToggleDialog(true))
			        dispatch(selectTodo(id))        
			      }} style={{textDecoration: completed ? 'line-through' : 'none'}} className={(completed) ? 'todo-complete' : ''} title="Click to see detail">{title}</a> 
				<RemoveTodo id={id} />
			</span>
		</li>
	)
}

Todo.PropTypes = {
	id: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}

Todo = connect()(Todo)
export default Todo;