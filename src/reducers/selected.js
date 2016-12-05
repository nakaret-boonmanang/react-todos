const selected = (state = null, action) => {
	switch (action.type){
		case 'SELECT_TODO':
			return action.id
		case 'NEW_TODO':
			return null
		default:
			return state
	}
}

export default selected