const toggleDialog = (state = false, action) => {
	switch (action.type){
		case 'SET_TOGGLE_DIALOG':
			return action.show
		default:
			return state
	}
}

export default toggleDialog