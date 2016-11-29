import React, {PropTypes} from 'react'

const Todo = ({onCheckboxClicked, onDeleted, completed, title}) => (
	<li onClick={onCheckboxClicked} style={{textDecoration: (completed) ? 'line-throught' : 'none'}}>
		<input type="checkbox" />
		{' '}
		{title}
		<a onClick={onDeleted}>x</a>
	</li>
)

Todo.PropTypes = {
	onCheckboxClicked: PropTypes.func.isRequired,
	onUpdated: PropTypes.func.isRequired,
	onDeleted: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	title: PropTypes.string.isRequired
}

export default Todo;