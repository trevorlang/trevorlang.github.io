import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="l-header c-header">
    <div className="l-header__container">
      <h1 className="c-masthead__heading">
        <Link
          to="/"
          className='c-masthead__link'
        >
          trevorlang.github.io
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
