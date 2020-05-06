import React from 'react'

function Header({ heading }) {
  return (
    <header tabIndex='0'>
      <h1>{ heading }</h1>
    </header>
  )
}

export default Header
