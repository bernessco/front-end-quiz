const item = (state = {
        isFetching: false,
        item: {}
    }, action) => {
    switch (action.type) {
      case 'REQUEST_ITEM':
        return Object.assign({}, state, {
            isFetching: true
        })
    case 'RECEIVE_ITEM':
        return Object.assign({}, state, {
            isFetching: false,
            item: action.item
        })
      default:
        return state
    }
  }
  
  export default item