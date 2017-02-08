import React, { PropTypes } from 'react'
import classes from './Header.styles.scss'
import MainNav from 'globals/MainNav'

const Header = () => {
  return (
    <header id='header' className={classes.header}>
      <span className={classes.logo}>
        <span className={classes.logoGrayHalf}>{'<S'}</span><span className={classes.logoBlueHalf}>{'I>'}</span>
        <span className={classes.logoTextGrayHalf}>Search</span><span className={classes.logoTextBlueHalf}>Innovator</span>
      </span>
      <MainNav />
    </header>
  )
}

module.exports = Header
