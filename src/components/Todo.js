import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import RemoveTodo from '../containers/RemoveTodo'
import DoneTodo from '../containers/DoneTodo'
import { selectTodo } from '../actions'

let Todo = ({dispatch, onCompleted, onUpdated, onRemoved, id, completed, title}) => {
	return (
		// if want to binding dispatch must be binding by onClick={e => { // do soming}} prevent call directly
		// because it will call dispatch imidiatly not by event.
		<li>
			<span><DoneTodo id={id} completed={completed} /></span>
			<span>
				<a style={{textDecoration: completed ? 'line-through' : 'none'}} onClick={e => {
			        dispatch(selectTodo(id))        
			      }}>{title}</a> 
				<RemoveTodo id={id} />
			</span>
		</li>
	)
}

Todo.PropTypes = {
	onCompleted: PropTypes.func.isRequired,
	onUpdated: PropTypes.func.isRequired,
	onRemoved: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}
Todo = connect()(Todo)
export default Todo;