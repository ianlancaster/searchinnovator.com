import React, { PropTypes } from 'react'
import classes from './Article.styles.scss'

const Article = ({ official_title, article_id, chamber, introduced_on, last_action_at }) => {
  return (
    <article className={classes.articleCard}>
      <h3>{article_id}</h3>
      <h2>{official_title}</h2>
      <p>Introduced on: {introduced_on}</p>
      <p>Last action: {last_action_at}</p>
    </article>
  )
}

Article.propTypes = {
  official_title: PropTypes.string.isRequired,
  article_id: PropTypes.string.isRequired,
  chamber: PropTypes.string,
  introduced_on: PropTypes.string.isRequired,
  last_action_at: PropTypes.string.isRequired
}

module.exports = Article
