import React from 'react'
import { Link } from 'react-router-dom'
import './breadcrumb.css'

const Links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About Us',
    href: '/about'
  },
  {
    label: 'Contact Us',
    href: '/contact'
  },
]

function Breadcrumb(props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumb"
    >
      <ol>
        {
          Links.map((link, i) => (
            <li key={i}>
              <Link to={link.href}>
                { link.label }
              </Link>
            </li>
          ))
        }
      </ol>
    </nav>
  )
}

export default Breadcrumb
