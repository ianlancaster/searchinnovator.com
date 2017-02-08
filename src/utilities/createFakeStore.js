const createFakeStore = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return { ...state }
    },
    children: {}
  }
}

export default createFakeStore
