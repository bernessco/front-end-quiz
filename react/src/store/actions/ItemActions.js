export const REQUEST_ITEM = 'REQUEST_ITEM'
const requestItem = () => {
    return {
        type: REQUEST_ITEM
    }
}

export const RECEIVE_ITEM = 'RECEIVE_ITEM'
const receiveItem = data => {
    return {
        type: RECEIVE_ITEM,
        item: data
    }
}

export const fetchItem = id => {
    return (dispatch, getState) => {
        const url = `http://127.0.0.1:3001/item/${id}`

        dispatch(requestItem())

        return fetch(url)
        .then(res => res.json(), err => console.log(err))
        .then(data => dispatch(receiveItem(data)))
    }
}