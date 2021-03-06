const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title,
        description: action.description,
        dateCreated: action.dateCreated,
        dateUpdated: action.dateUpdated,
        completed: false
      }
    case 'COMPLETE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      }
    case 'UPDATE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return {
        id: action.id,
        title: action.title,
        description: action.description,
        dateCreated: state.dateCreated,
        dateUpdated: action.dateUpdated,
        completed: state.completed
      }
    default:
      return state
  }
}

const todos = (state = [], action) => {
	switch (action.type){
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action)
			]
		case 'COMPLETE_TODO':
			return state.map(t =>
		        todo(t, action)
		     )
		case 'UPDATE_TODO':
      return state.map(t =>
            todo(t, action)
         )
		case 'REMOVE_TODO':
			let newState = state.filter(function(obj){
				return obj.id !== action.id;
			})
			return newState;
		default:
			return state
	}
}

export default todos;