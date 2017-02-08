import { connect } from 'react-redux'
import { fetchMainNavContent } from './MainNav.modules.js'
import MainNav from './MainNav.component.js'

const mapDispatchToProps = {
  fetchMainNavContent
}

const mapStateToProps = (state, ownProps) => ({
  mainNavContent: state.mainNav.mainNavContent
})

export default connect(mapStateToProps, mapDispatchToProps)(MainNav)
