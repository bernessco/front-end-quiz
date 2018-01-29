const items = (state = {
    isFetching: false,
    items: []
  }, action) => {
    switch (action.type) {
      case 'REQUEST_ITEMS':
        return Object.assign({}, state, {
            isFetching: true,
            didInvalidate: false
        })
    case 'RECEIVE_ITEMS':
        return Object.assign({}, state, {
            isFetching: false,
            didInvalidate: false,
            items: action.items
        })
      default:
        return state
    }
  }
  
  export default items