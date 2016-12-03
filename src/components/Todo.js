import React, {PropTypes} from 'react'
import RemoveTodo from '../containers/RemoveTodo'
import DoneTodo from '../containers/DoneTodo'

const Todo = ({onCompleted, onUpdated, onRemoved, id, completed, title}) => {
	return (
		<li>
			<div className="todo-checkbox">
				<DoneTodo id={id} />
			</div>
			<div className="todo-title">
				<a style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</a> 
				<RemoveTodo id={id} />
			</div>
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

export default Todo;