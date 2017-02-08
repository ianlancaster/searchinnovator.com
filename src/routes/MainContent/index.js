import { injectReducer } from 'store/reducers'

export default (store) => ({
  path: 'main-content',
  getComponent (nextState, next) {
    require.ensure([
      './MainContent.container',
      './MainContent.modules'
    ], (require) => {
      const MainContent = require('./MainContent.container').default
      const mainContentReducer = require('./MainContent.modules').default

      injectReducer(store, {
        key: 'mainContent',
        reducer: mainContentReducer
      })

      next(null, MainContent)
    })
  }
})
