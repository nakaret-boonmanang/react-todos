import React from 'react'

let Link = ({ children, onClick }) => {
  return (
  	<a onClick={onClick}>{children}</a>
  )
}

export default Link
