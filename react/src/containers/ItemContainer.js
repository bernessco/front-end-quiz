import { connect } from 'react-redux'
import ItemView from '../views/ItemView'
import { fetchItem } from '../store/actions/ItemActions'
import { changeTitle } from '../store/actions/HeaderActions'

const mapStateToProps = (state, ownProps) => {
  return {
      item: state.ItemReducer.item || {},
      isFetching: state.ItemReducer.isFetching || false
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchItem: (id) => dispatch(fetchItem(id)),
      changeHeaderTitle: (image) => dispatch(changeTitle(image))
  }
}

const ItemContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemView)

export default ItemContainer