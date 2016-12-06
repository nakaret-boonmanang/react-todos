let nextTodoId = 0

export const setNextTodoId = (id) => {
	nextTodoId = id + 1
}

export const addTodo = (title, description) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	title,
	description,
	dateCreated: Date(),
	dateUpdated: null
})

export const setFilterVisibility = (filter) => ({
	type: 'SET_FILTER_VISIBILITY',
	filter
})

export const completeTodo = (id, completed) => ({
	type: 'COMPLETE_TODO',
	id,
	completed
})

export const updateTodo = (id, title, description) => ({
	type: 'UPDATE_TODO',
	id,
	title,
	description,
	dateUpdated: Date()
})

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
})

export const selectTodo = (id) => ({
	type: 'SELECT_TODO',
	id
})

export const newTodo = () => ({
	type: 'NEW_TODO'
})

export const setToggleDialog = (show) => ({
	type: 'SET_TOGGLE_DIALOG',
	show
})