import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      title: this.props.title,
      description: this.props.description
    }

    this.handleTitleChanged = this.handleTitleChanged.bind(this)
    this.handleDescriptionChanged = this.handleDescriptionChanged.bind(this)
  }

  handleTitleChanged(e) {
      this.setState({title: e.target.value});
  }

  handleDescriptionChanged(e) {
      this.setState({description: e.target.value});
  }
  
  render(){
    let titleInput, descInput
    return (
      <div className="todo-add">
        <h4>Reminders</h4>
        <span className="show-todo-add-icon">[+]</span>
        <form onSubmit={e => {
            e.preventDefault()
            
            if (!titleInput.value.trim()) {
              return
            }

            // dispatch(addTodo(titleInput.value, descInput.value))
            titleInput.value = ''
            descInput.value = ''
            
          }}>

          {/* title textbox */ }
          <div className="fields">
            Title
          </div>
          <div className="values">
            <input type="text" value={this.state.title} onChange={this.handleTitleChanged}  ref={node => {
              titleInput = node
            }} />
          </div>
          {/* value textbox */ }
          <div className="fields">
            Description
          </div>
          <div className="values">
            <input type="text" value={this.state.description} onChange={this.handleDescriptionChanged}  ref={node => {
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
}

export default AddTodo
