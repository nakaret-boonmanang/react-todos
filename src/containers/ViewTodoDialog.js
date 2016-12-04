import { connect } from 'react-redux'
import { selectTodo} from '../actions'
import AddTodo from './AddTodo'

// function for get visible todo list
const getSelectedTodo = (todos, id) => {
	var todo = todos.filter(q => q.id == id)
	if(todo.length > 0)
		return {
			title: todo[0].title,
			description: todo[0].description,
			dateCreated: todo[0].dateCreated,
			dateUpdated: todo[0].dateUpdated
		}
	else
		return null
}

// mapping state to props
const mapStateToProps = (state) => ({
	todo: getSelectedTodo(state.todos, state.selected),
	selected: state.selected
})

// mapping dispatch event to props
const mapDispatchToProps = ({
})

// pass state and dispatch to todoList via connect
const ViewTodoDialog = connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodo)

export default ViewTodoDialog