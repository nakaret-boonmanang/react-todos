import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let titleInput, descInput

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        
        if (!titleInput.value.trim()) {
          return
        }

        dispatch(addTodo(titleInput.value, descInput.value))
        titleInput.value = ''
        descInput.value = ''
        
      }}>
        Title:
        {' '}
        <input ref={node => {
          titleInput = node
        }} />
        <br/>
        Description:
        {' '}
        <input ref={node => {
          descInput = node
        }} />
        {' '}
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
