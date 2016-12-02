import React, {PropTypes} from 'react'
import RemoveTodo from '../containers/RemoveTodo'
import DoneTodo from '../containers/DoneTodo'

const Todo = ({onCompleted, onUpdated, onRemoved, id, completed, title}) => {
	return (
		<li>
			<DoneTodo id={id} />
			{' '}
			<a style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</a> 
			{' '}
			<RemoveTodo id={id} />
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