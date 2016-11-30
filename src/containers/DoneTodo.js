import React from 'react'
import { connect } from 'react-redux'
import { completeTodo } from '../actions'

let DoneTodo = ({ dispatch, id }) => {
  return (
  	<input type="checkbox" onClick={e => {
        dispatch(completeTodo(id, e.checked))        
      }}  />
  )
}
DoneTodo = connect()(DoneTodo)

export default DoneTodo
