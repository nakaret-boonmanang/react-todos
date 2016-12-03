import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

let RemoveTodo = ({ dispatch, id }) => {
  return (
      <span style={{cursor: 'pointer', position: 'absolute', right: '10px'}} onClick={e => {
        e.preventDefault()
        dispatch(removeTodo(id))        
      }}>
        x
      </span>
  )
}
RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo
