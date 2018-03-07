import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import Header from '../components/Header'

import hero from '../assets/images/home/hero_large.jpg'
import '../assets/scss/main.scss'

console.log(hero)

const TemplateWrapper = ({ children }) => (
  <div className="l-wrapper">
    <Helmet
      title="trevorlang.github.io"
      meta={[
        { name: 'description', content: 'A Gatsby.js based GitHub user page' },
        { name: 'keywords', content: 'trevor lang, github page, gatsby.js, gatsby' },
      ]}
    />
    <Header />
    <main className="l-main">
      {children()}
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
