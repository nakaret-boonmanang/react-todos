import React from 'react'
import { connect } from 'react-redux'
import Link from '../components/Link'
import { setFilterVisibility } from '../actions'

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.filterVisibility,
	text: ownProps.text
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setFilterVisibility(ownProps.filter))
	}
})

const FilterLink = connect(
	mapStateToProps,
	mapDispatchToProps
)(Link)
export default FilterLink
