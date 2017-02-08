import React, { Component, PropTypes } from 'react'
import classes from './MainContent.styles.scss'
import Article from 'globals/Article'

class MainContent extends Component {
  componentWillMount () {
    const { fetchMainContent } = this.props

    fetchMainContent()
  }

  render () {
    const { mainContent } = this.props

    return (
      <section>
        {mainContent && (mainContent.map((article, i) => <Article key={i} {...article} />))}
      </section>
    )
  }
}

MainContent.propTypes = {
  fetchMainContent: PropTypes.func.isRequired,
  mainContent: PropTypes.arrayOf(PropTypes.object)
}

module.exports = MainContent
