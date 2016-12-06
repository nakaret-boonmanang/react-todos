import React from 'react'
import Time from 'react-time'
import { connect } from 'react-redux'
import { addTodo, updateTodo, newTodo, setToggleDialog } from '../actions'

let TodoDialog = ({dispatch, todo, selected, onAddTodo, toggleDialog}) => {
  let titleInput, descInput
  let title = (todo) ? todo.title : ''
  let description = (todo) ? todo.description : ''
  let dateCreated = (todo) ? todo.dateCreated : ''
  let showDialog = toggleDialog
  let showDialogTooltip = (showDialog) ? 'Hide Todo dialog' : 'Show Todo Dialog'
  
  // when any textbox got focus display value from placeholder [workaround]
  let onTextFocused = (e) => {
    e.preventDefault()
    e.target.value = e.target.placeholder
    e.target.select()
  }

  //when any textbox lost focused display value as placeholder [workaround]
  let onTextLostFocused = (e) => {
    e.preventDefault()
    e.target.placeholder = e.target.value
    e.target.value = ''
  }

  // clear all text box values
  let clearAll = () => {
    // clear text values
    titleInput.value = ''
    descInput.value = ''
    titleInput.placeholder = ''
    descInput.placeholder = ''
  }

  // get textbox values that compared with value and placeholder attribute
  let getTextBoxValues = () => {
    return {
      title: titleInput.value ? titleInput.value : titleInput.placeholder,
      description: descInput.value ? descInput.value : descInput.placeholder
    }
  }

  return (
    <div className="todo-dialog">
      <div className="reminder">
        <h4>Reminders</h4>
        <span className="toggle-dialog-icon" title={showDialogTooltip} onClick={e => {
          showDialog = !showDialog
          dispatch(setToggleDialog(showDialog))
        }}> {(showDialog) ? '[-]' : '[+]'}</span>
      </div>
      {/* Todo Dialog */}
      <div className="todo-dialog-content" style={{display: (showDialog) ? '' : 'none'}}>
        <form onSubmit={e => {
               e.preventDefault()
                var txt = getTextBoxValues()
                if (!txt.title.trim()) {
                  return
                }

                if(!todo){
                  // add new todo
                  dispatch(addTodo(txt.title, txt.description))
                }
                else{
                  // update selected todo
                  dispatch(updateTodo(todo.id, txt.title, txt.description))
                  // set default behavior as new todo
                  dispatch(newTodo())
                }
                clearAll()
            }} >

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
            {/* Created Date */ }
            <div className="dates">
              {(todo) ? 'Created: ' : ''} 
              {(todo) ? <Time value={dateCreated} format="YYYY/MM/DD HH:mm" /> : ''} 
            </div>
            {/* buttons*/}
            <div className="fields"></div>
            <div className="buttons">
              <button type="submit">
                {(todo) ? 'Update Todo' : 'Add Todo'}
              </button>
              {' '}
              <button onClick={e => {
                dispatch(newTodo())
              }}>
                Clear All
              </button>
            </div>
        </form>
      </div>
    </div>
  )
}
TodoDialog = connect()(TodoDialog)

export default TodoDialog
