import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import '../assets/scss/main.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="trevorlang.github.io"
      meta={[
        { name: 'description', content: 'A Gatsby.js based GitHub user page' },
        { name: 'keywords', content: 'trevor lang, github page, gatsby.js, gatsby' },
      ]}
    />
    <Header />
    <div className="l-main">
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
