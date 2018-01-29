function requestItem(id) {
    return {
        type: 'REQUEST_ITEM',
        id
    }
}
function receiveItem(item) {
    return {
      type: 'RECEIVE_ITEM',
      item
    }
}

export function fetchItem(id) {
    return dispatch => {
      dispatch(requestItem(id))
      return fetch(`http://127.0.0.1:3001/item/${id}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(response => response.json(), error => console.log('An error occurred.', error))
        .then(json =>
          dispatch(receiveItem(json))
        )
    }
  }