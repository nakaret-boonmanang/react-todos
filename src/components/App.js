import React from 'react'
import Filter from './Filter'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
      <div>
        <Filter />
        <AddTodo />
        <VisibleTodoList />
      </div>
)

export default App;
