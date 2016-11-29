const todos = (state = [], action) => {
	switch (action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					title: action.title,
					completed: false
				}
			]
		case 'CLICK_TODO_CHECKBOX':
			// return state.map(t => 
			// 	if(t.id !== action.id){
			// 		return state
			// 	}
			// 	return {
			// 		..state,
			// 		completed: !state.completed
			// 	}
			// )
			return state
		case 'UPDATE_TODO':
			break;
		case 'DELETE_TODO':
			break;
		default:
			return state
	}
}

export default todos;