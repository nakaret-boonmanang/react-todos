import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
      <div className="container">
        <Filter /><br/>
        <AddTodo />
        <VisibleTodoList />
      </div>
)

export default App;
