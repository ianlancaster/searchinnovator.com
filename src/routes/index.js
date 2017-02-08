import CoreLayout from 'globals/CoreLayout'
import Home from 'routes/Home'
// replace CoreLayout with Iphone for a mobile rendering

export const createRoutes = (store) => {
  const routes = {
    path: '/',
    component: CoreLayout,
    indexRoute: { component: Home },
    getChildRoutes (location, next) {
      require.ensure([], (require) => {
        next(null, [
          require('./Resume').default,
          require('./Blog').default
        ])
      })
    }
  }

  return routes
}

export default createRoutes
