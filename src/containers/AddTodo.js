import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let titleInput, descInput

  return (
    <div className="todo-add">
      <h4>Add TODO</h4>
      <form onSubmit={e => {
          e.preventDefault()
          
          if (!titleInput.value.trim()) {
            return
          }

          dispatch(addTodo(titleInput.value, descInput.value))
          titleInput.value = ''
          descInput.value = ''
          
        }}>

        <div className="fields">
          Title
        </div>
        <div className="values">
          <input ref={node => {
            titleInput = node
          }} />
        </div>
        <div className="fields">
          Description
        </div>
        <div className="values">
          <input ref={node => {
            descInput = node
          }} />
        </div>
        <div className="fields"></div>
        <div className="values">
          <button type="submit">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
