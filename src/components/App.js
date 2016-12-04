import React from 'react'
import Filter from './Filter'
import ViewTodoDialog from '../containers/ViewTodoDialog'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
      <div className="container">
        <Filter /><br/>
        <ViewTodoDialog />
        <VisibleTodoList />
      </div>
)

export default App;
