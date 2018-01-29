import { combineReducers } from 'redux'
import HeaderReducer from './HeaderReducer'
import BrowseReducer from './BrowseReducer'

const AllReducers = combineReducers({
  HeaderReducer,
  BrowseReducer
})

export default AllReducers