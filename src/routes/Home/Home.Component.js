const headShotImg = require('./assets/Ian-Lancaster-Headshot.jpg')
var ClipboardButton = require('react-clipboard.js')
import ReactTooltip from 'react-tooltip'

import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import c from './Home.styles.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentWillMount () {
    const { fetchHomeContent } = this.props
    fetchHomeContent()
  }

  render () {
    const { content, title } = this.props

    return (
      <div>
        <section className={c.homeBackground}>
          <div className={c.mainContent}>
            <div className={c.columnOneThird}>
              <div className={c.verticalOffset}>
                <img src={headShotImg} className={c.headShotImg} />
                <h3>Ian Lancaster | Front End Engineer & SEO Specialist</h3>
                <h3><span className={c.smallerize}>Get In Touch</span></h3>
                <section className={c.socialLinks}>
                  <a href='https://twitter.com/ianlancaster' rel='me' className={`${c.twitterIcon} ${c.socialIcon}`} />
                  <a href='https://www.linkedin.com/in/ianclancaster' rel='me' className={`${c.linkedInIcon} ${c.socialIcon}`} />
                  <a href='https://github.com/ianlancaster' rel='me' className={`${c.gitHubIcon} ${c.socialIcon}`} />
                  <ReactTooltip globalEventOff='click' delayHide={600} place='bottom' />
                  <ClipboardButton data-tip='copied' data-event='click focus' className={c.emailCopy} data-clipboard-text='ianclancaster@gmail.com'>
                    <a className={`${c.emailIcon} ${c.socialIcon}`} />
                  </ClipboardButton>
                </section>
              </div>
            </div>
            <span className={c.columnTwoThirds}>
              <h2>Hello, My name is Ian.</h2>
              <p>
                I am a front end software engineer and search engine optimization specialist.
              </p>
            </span>
          </div>
        </section>
        <section className={c.mainContent}>
          <span className={c.columnOneThird} />
          <span className={c.columnTwoThirds}>
            <h3>A Little About Me</h3>
            <span dangerouslySetInnerHTML={{ __html: content }} />
          </span>
        </section>
      </div>
    )
  }
}

Home.propTypes = {
  content: PropTypes.any,
  title: PropTypes.any,
  fetchHomeContent: PropTypes.any
}

module.exports = Home
