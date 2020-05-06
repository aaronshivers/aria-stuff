import React from 'react'
import { Link } from 'react-router-dom'

function BreadcrumbLink({ href, label }) {
  return (
    <li>
      <Link to={ href }>
        { label }
      </Link>
    </li>
  )
}

export default BreadcrumbLink
