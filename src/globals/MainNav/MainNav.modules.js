import fetch from 'isomorphic-fetch'

// ------------------------------------
// Actions
// ------------------------------------
let ACTION_HANDLERS = {}

const handleAction = (ACTION_TYPE, stateChanges) => {
  ACTION_HANDLERS = {
    ...ACTION_HANDLERS,
    [ACTION_TYPE]: (state, action) => ({
      ...state,
      ...stateChanges(state, action)
    })
  }
}

export const fetchMainNavContent = () => {
  return (dispatch) => {
    if (localStorage.getItem('mainNavContent')) {
      dispatch(renderCachedMainNavContent())
    } else {
      dispatch(requestMainNavContent())
    }

    // reroute fetch call to hit WordPress server if running development
    const __DEV__ = process.env.NODE_ENV === 'development'
    const wpServer = __DEV__ ? 'http://localhost' : window.location.origin

    return fetch(`${wpServer}/wp-json/wp-api-menus/v2/menus/2`)
      .then(data => data.json())
      .then(json => dispatch(receiveMainNavContent(json)))
      .catch(err => console.log('There was an error fetching the nav menus: ', err))
  }
}

export const renderCachedMainNavContent = () => ({
  type: 'RENDER_CACHED_MAIN_NAV_CONTENT',
  mainNavContent: JSON.parse(localStorage.getItem('mainNavContent'))
})

handleAction('RENDER_CACHED_MAIN_NAV_CONTENT', (state, action) => ({
  fetching: true,
  mainNavContent: action.mainNavContent
}))

export const requestMainNavContent = () => ({
  type: 'REQUEST_MAIN_NAV_CONTENT'
})

handleAction('REQUEST_MAIN_NAV_CONTENT', (state, action) => ({
  fetching: true
}))

export const receiveMainNavContent = (mainNavContent) => ({
  type: 'RECEIVE_MAIN_NAV_CONTENT',
  mainNavContent
})

handleAction('RECEIVE_MAIN_NAV_CONTENT', (state, action) => {
  const mainNavContent = action.mainNavContent.items.map(n => ({
    label: n.title,
    route: n.url,
    order: n.order
  }))

  localStorage.setItem('mainNavContent', JSON.stringify(mainNavContent))

  return {
    mainNavContent,
    fetching: false
  }
})

export const reveiveErr = (err) => ({
  type: 'RECEIVE_ERR',
  err
})

handleAction('RECEIVE_ERR', (state, action) => ({
  err: action.err,
  fetching: false
}))

// ------------------------------------
// Reducers
// ------------------------------------
const initialState = {
  mainNavContent: [{
    content: { rendered: '' },
    title: { rendered: '' }
  }]
}

export default function mainNavReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
