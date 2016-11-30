import { connect } from 'react-redux'
import { completeTodo, updateTodo, removeTodo} from '../actions'
import TodoList from '../components/TodoList'

// function for get visible todo list
const getVisibleTodos = (todos, filter) => {
	switch (filter){
		case "ALL":
			return todos
		case "COMPLETED":
			return todos.filter(q => q.completed)
		case "ACTIVE":
			return todos.filter(q => !q.completed)
		default:
			return todos
	}
}

// mapping state to props
const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.filterVisibility)
})

// mapping dispatch event to props
const mapDispatchToProps = ({
	onTodoCompleted: completeTodo,
	onTodoRemoved: removeTodo,
	onTodoUpdated: updateTodo
})

// pass state and dispatch to todoList via connect
const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList