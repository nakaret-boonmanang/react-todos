import React from 'react'
import Header from './Header'
import Filter from './Filter'
import ViewTodoDialog from '../containers/ViewTodoDialog'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
      <div className="container">
      	<Header/>
        <Filter />
        <ViewTodoDialog />
        <VisibleTodoList />
      </div>
)

export default App;
