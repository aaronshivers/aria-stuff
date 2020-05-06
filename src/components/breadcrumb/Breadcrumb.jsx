import React from 'react'
import './breadcrumb.css'
import BreadcrumbLink from '../breadcrumb-link/BreadcrumbLink'

const Links = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  },
]

function Breadcrumb() {
  return (
    <nav
      aria-label="Breadcrumb"
      className="breadcrumb"
    >
      <ol>
        {
          Links.map((link, i) => (
            <
              BreadcrumbLink
              key={ i }
              {...link}
            />
          ))
        }
      </ol>
    </nav>
  )
}

export default Breadcrumb
