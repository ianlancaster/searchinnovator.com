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

export const fetchMainContent = (pageNumber = 1) => {
  return (dispatch) => {
    dispatch(requestMainContent())
    return fetch(`http://localhost:3001/api/mainContent/${pageNumber}`)
      .then(data => data.json())
      .then(json => dispatch(receiveMainContent(json)))
      .catch(err => dispatch(reveiveErr(err)))
  }
}

export const requestMainContent = () => ({
  type: 'REQUEST_MAIN_CONTENT'
})

handleAction('REQUEST_MAIN_CONTENT', (state, action) => ({
  fetching: true
}))

export const receiveMainContent = (mainContent) => ({
  type: 'RECEIVE_MAIN_CONTENT',
  mainContent
})

handleAction('RECEIVE_MAIN_CONTENT', (state, action) => ({
  mainContent: [...state.mainContent, ...action.mainContent],
  fetching: false
}))

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
const initialState = { mainContent: [] }

export default function mainContentReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
