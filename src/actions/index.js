let nextTodoId = 0

export const addTodo = (title) => ({
	type: 'ADD_TODO',
	id: nextTodoId++,
	title
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

export const updateTodo = (id, title) => ({
	type: 'UPDATE_TODO',
	id,
	title
})

export const removeTodo = (id) => ({
	type: 'REMOVE_TODO',
	id
})

export const selectTodo = (id) => ({
	type: 'SELECT_TODO',
	id
})