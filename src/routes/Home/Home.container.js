import { connect } from 'react-redux'
import { fetchHomeContent } from './Home.modules.js'
import Home from './Home.component.js'

const mapDispatchToProps = {
  fetchHomeContent
}

const mapStateToProps = (state, ownProps) => ({
  content: state.home.content,
  title: state.home.title
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
