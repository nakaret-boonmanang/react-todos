const selected = (state = null, action) => {
	switch (action.type){
		case 'SELECT_TODO':
			return action.id
		default:
			return state
	}
}

export default selected