import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './NavLink.styles.scss'

class NavLink extends Component {
  constructor () {
    super()
    this.state = {}
  }
  render () {
    const { data } = this.props
    let isExternal = false

    if (data.route && data.route.slice(0, 4) === 'http') {
      isExternal = true
    }
    /* eslint-disable */
    return (
      <li className={classes.mainNavLink}>
        { isExternal ? <a href={data.route}>{data.label}</a>
                     : <Link to={data.route}
                        onlyActiveOnIndex
                        activeClassName={classes.activeLink}>
                        {data.label}
                       </Link> }
      </li>
    )
  }
}

NavLink.propTypes = {
  data: PropTypes.object.isRequired
}

module.exports = NavLink
