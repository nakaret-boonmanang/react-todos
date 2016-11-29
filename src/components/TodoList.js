import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoClicked, onTodoDeleted, onTodoUpdated}) => (
	<ul>
		{todos.map(todo =>
			<Todo 
				key={todo.id}
				title={() => todo.title}
				completed={() => todo.completed}
				onCheckboxClicked={() => onTodoClicked(todo.id)}
				onUpdated={() => onTodoUpdated(todo.id, todo.title)}
				onDeleted={() => onTodoDeleted(todo.id)}
			/>
		)}
	</ul>
)

TodoList.PropTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClicked: PropTypes.func.isRequired,
	onTodoDeleted: PropTypes.func.isRequired,
	onTodoUpdated: PropTypes.func.isRequired
}		