import { connect } from 'react-redux'
import { fetchMainContent } from './MainContent.modules'
import MainContent from './MainContent.component'

const mapDispatchToProps = {
  fetchMainContent
}

const mapStateToProps = (state, ownProps) => {
  return {
    mainContent: state.mainContent.mainContent
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContent)
