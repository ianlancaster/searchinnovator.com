import React, { Component, PropTypes } from 'react'
import classes from './MainNav.styles.scss'
import NavLink from 'globals/NavLink'

class MainNav extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    const { fetchMainNavContent } = this.props
    fetchMainNavContent()
  }

  render () {
    const { mainNavContent } = this.props

    return (
      <nav className={classes.mainNav}>
        <ul>
          {mainNavContent && (mainNavContent.map((navItem, i) => (
            <NavLink data={navItem} key={i} />
          )))}
        </ul>
      </nav>
    )
  }
}

MainNav.propTypes = {
  mainNavContent: PropTypes.any,
  fetchMainNavContent: PropTypes.any
}

module.exports = MainNav
