import { REQUEST_ITEMS, RECEIVE_ITEMS, SET_FAVORITE } from '../actions/BrowseActions'

const BrowseReducer = (state = {
        isFetching: false,
        items: [],
        start: 0,
        favorites: JSON.parse(localStorage.getItem('favorites')) || {}
    }, action) => {
        switch (action.type) {
            
            case REQUEST_ITEMS:
            return Object.assign({}, state, {
                isFetching: true
            })

            case RECEIVE_ITEMS:
                return Object.assign({}, state, {
                    isFetching: false,
                    items: state.items.concat(action.items),
                    start: state.start + action.items.length,
                    totalItems: action.totalItems
                })
            case SET_FAVORITE:
                return Object.assign({}, state, {
                    favorites: action.favorites
                })
            default:
                return state
        }
}  
export default BrowseReducer