import React from 'react'
import { connect } from 'react-redux'
import { addTodo, updateTodo } from '../actions'

let AddTodo = ({dispatch, todo, selected, onAddTodo }) => {
  let titleInput, descInput
  let title = (todo) ? todo.title : ''
  let description = (todo) ? todo.description : ''
  
  // when any textbox got focus display value from placeholder [workaround]
  let onTextFocused = (e) => {
    e.preventDefault()
    e.target.value = e.target.placeholder
  }

  //when any textbox lost focused display value as placeholder [workaround]
  let onTextLostFocused = (e) => {
    e.preventDefault()
    e.target.placeholder = e.target.value
    e.target.value = ''
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

          if(!todo){
            // add new todo
            dispatch(addTodo(titleInput.value, descInput.value))
          }
          else{
            // update selected todo
            dispatch(updateTodo(todo.id, titleInput.value, descInput.value))
          }

          // clear text values
          titleInput.value = ''
          descInput.value = ''
          titleInput.placeholder = ''
          descInput.placeholder = ''
          
        }}>

        {/* title textbox */ }
        <div className="fields">
          Title
        </div>
        <div className="values">
          <input type="text" placeholder={title} ref={node => {
            titleInput = node
          }} onFocus={onTextFocused} onBlur={onTextLostFocused} />
        </div>
        {/* value textbox */ }
        <div className="fields">
          Description
        </div>
        <div className="values">
          <input type="text" placeholder={description} ref={node => {
            descInput = node
          }} onFocus={onTextFocused} onBlur={onTextLostFocused} />
        </div>
        <div className="fields"></div>
        <div className="values">
          <button type="submit">
            {(todo) ? 'Update Todo' : 'Add Todo'}
          </button>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
