import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <header className="l-header c-header">
    <div className="c-header__container">
      <h1 className="c-header__heading">
        <Link
          to="/"
          className='c-header__link'
        >
          trevorlang.github.io
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
