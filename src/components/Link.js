import React from 'react'

let Link = ({ text, onClick, active }) => {
	if(active){
		return (
			<span className="active">{text}</span>
		)
	}
	return (
		<span>
			<a onClick={onClick}>{text}</a>
		</span>
	)
}

export default Link
