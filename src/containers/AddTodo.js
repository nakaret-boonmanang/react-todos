import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({dispatch, todo, selected, onAddTodo }) => {
  let titleInput, descInput
  
  var title = (todo) ? todo.title : ''
  var description = (todo) ? todo.description : ''

  let onTitleChange = (e) => {
    titleInput.value = e.target.value
  }

  return (
    <div className="todo-add">
      <h4>Reminders</h4>
      <span className="show-todo-add-icon">[+]</span>
      <form onSubmit={e => {
          e.preventDefault()
          
          if (!titleInput.value.trim()) {
            return
          }

          dispatch(addTodo(titleInput.value, descInput.value))
          titleInput.value = ''
          descInput.value = ''
          
        }}>

        {/* title textbox */ }
        <div className="fields">
          {title}
        </div>
        <div className="values">
          <input type="text" ref={node => {
            titleInput = node
          }} />
        </div>
        {/* value textbox */ }
        <div className="fields">
          {description}
        </div>
        <div className="values">
          <input type="text" ref={node => {
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
