import React from 'react'
import FilterLink from '../containers/FilterLink'

const Filter = () => (
    <div className="filter">
      	<FilterLink filter="ALL" text="All"></FilterLink>
      	{" "}
      	<FilterLink filter="ACTIVE" text="Active"></FilterLink>
      	{" "}
      	<FilterLink filter="COMPLETED" text="Completed"></FilterLink>
    </div>
)

export default Filter;
