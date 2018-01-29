function requestItems() {
    return {
        type: 'REQUEST_ITEMS'
    }
}
function receiveItems(json) {
    return {
      type: 'RECEIVE_ITEMS',
      items: json.items.map(item => item)
    }
}

export function fetchItems() {
    return dispatch => {
      dispatch(requestItems())
      return fetch('http://127.0.0.1:3001/browse', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json =>
          dispatch(receiveItems(json))
        )
    }
  }