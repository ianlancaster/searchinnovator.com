import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classes from './Footer.styles.scss'

const Footer = () => {
  return (
    <footer id='footer' className={classes.footer}>
      <h3>UX Myth #3: People don't scroll. ... ... MYTH BUSTED!</h3>
      <p>This site was created using SearchInovator's own <a href='https://github.com/ianlancaster/searchinnovator.com'>React-Redux-WordPress-Theme</a>.
        It's a whole new breed of WordPress, and it's open source. Check it out!</p>
    </footer>
  )
}

module.exports = Footer
