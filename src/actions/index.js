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

export const clickTodoCheckbox = (id) => ({
	type: 'CLICK_TODO_CHECKBOX',
	id
})

export const updateTodo = (id, title) => ({
	type: 'UPDATE_TODO',
	id,
	title
})

export const deleteTodo = (id) => ({
	type: 'DELETE_TODO',
	id
})