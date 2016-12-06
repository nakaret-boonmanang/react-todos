import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../actions'

let DoneTodo = ({ dispatch, id, completed }) => {
  return (
  	<input type="checkbox" checked={completed} onChange={e => {
        dispatch(completeTodo(id, e.checked))        
      }}  />
  )
}

DoneTodo.PropTypes = {
	id: PropTypes.number.isRequired,
	completed: PropTypes.bool.isRequired
}

DoneTodo = connect()(DoneTodo)

export default DoneTodo
