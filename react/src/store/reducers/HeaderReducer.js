import { CHANGE_TITLE } from '../actions/HeaderActions'

const HeaderReducer = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                text: action.text,
                image: action.image
            }
        default:
            return state
    }
  }
  
export default HeaderReducer