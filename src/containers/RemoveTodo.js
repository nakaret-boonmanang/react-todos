import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

let RemoveTodo = ({ dispatch, id }) => {
  return (
      <span onClick={e => {
        e.preventDefault()
        dispatch(removeTodo(id))        
      }} style={{cursor: 'pointer', position: 'absolute', top: '-5px', right: '10px'}} title="Delete Todo">
        x
      </span>
  )
}

RemoveTodo.PropTypes = {
	id: PropTypes.number.isRequired
}

RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo
