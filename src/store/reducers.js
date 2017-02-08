import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import home from 'routes/Home/Home.modules'
import mainNav from 'globals/MainNav/MainNav.modules'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    router,
    home,
    mainNav,
    ...asyncReducers })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
