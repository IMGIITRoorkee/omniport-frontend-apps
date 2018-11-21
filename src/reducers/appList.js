const initialState = {
  isLoaded: false
}
const appList = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_APPLIST':
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}

export default appList
