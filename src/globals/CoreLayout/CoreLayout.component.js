import React, { Component, PropTypes } from 'react'
import Header from 'globals/Header'
import classes from './CoreLayout.styles.scss'
import Footer from 'globals/Footer'

export default class CoreLayout extends Component {
  render () {
    const { children } = this.props

    return (
      <div id='coreLayout' className={classes.coreLayout}>
        <Header />
        <main id='main'>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

CoreLayout.propTypes = {
  children: PropTypes.node
}
