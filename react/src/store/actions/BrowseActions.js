export const REQUEST_ITEMS = 'REQUEST_ITEMS'
const requestItems = () => {
    return {
        type: REQUEST_ITEMS
    }
}

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
const receiveItems = data => {
    return {
        type: RECEIVE_ITEMS,
        items: data.items.map(item => item),
        totalItems: data.totalItems
    }
}

export const SET_FAVORITE = 'SET_FAVORITE'
const setFavorite = favorites => {
    return {
        type: SET_FAVORITE,
        favorites
    }
}

export const toogleFavorite = id => {
    return (dispatch, getState) => {
        const favorites = Object.assign({}, getState().BrowseReducer.favorites);
        (favorites[id]) ? delete favorites[id] : favorites[id] = true
        localStorage.setItem('favorites', JSON.stringify(favorites))
        dispatch(setFavorite(favorites))
    }
}

export const fetchItems = (limit = 9) => {
    return (dispatch, getState) => {

        const offset = getState().BrowseReducer.start
        const url = `http://127.0.0.1:3001/browse?start=${offset}&limit=${limit}`
          
        dispatch(requestItems())

        return fetch(url)
            .then(res => res.json(), err => console.log(err))
            .then(data => dispatch(receiveItems(data)))
    }
}