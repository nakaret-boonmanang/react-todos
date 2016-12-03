import React, {PropTypes} from 'react'
import Todo from './Todo'

const TodoList = ({todos, onTodoCompleted, onTodoRemoved, onTodoUpdated}) => (
	<div className="todo-list">
		<ul style={{margin:'0px', padding: '0px'}}>
			{todos.map(todo =>
				<Todo 
					key={todo.id}
					id={todo.id}
					title={todo.title}
					completed={todo.completed}
					onCompleted={() => onTodoCompleted(todo.id)}
					onUpdated={() => onTodoUpdated(todo.id, todo.title)}
					onDeleted={() => onTodoRemoved(todo.id)}
				/>
			)}
		</ul>
	</div>
)

TodoList.PropTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired
	}).isRequired).isRequired,
	onTodoClicked: PropTypes.func.isRequired,
	onTodoRemoved: PropTypes.func.isRequired,
	onTodoUpdated: PropTypes.func.isRequired
}		

export default TodoList