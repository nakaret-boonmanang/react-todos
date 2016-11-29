const filterVisibility = (state = 'ALL', action) => {
	switch (action.type){
		case 'SET_FILTER_VISIBILITY':
			return action.filter
		default:
			return state
	}
}

export default filterVisibility