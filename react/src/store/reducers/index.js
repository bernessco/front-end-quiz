import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer'
import BrowseReducer from './BrowseReducer'
import ItemReducer from './ItemReducer'

const AllReducers = combineReducers({
  HeaderReducer,
  BrowseReducer,
  ItemReducer
})

export default AllReducers