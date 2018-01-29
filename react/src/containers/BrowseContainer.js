import { connect } from 'react-redux'
import BrowseView from '../views/BrowseView'
import { fetchItems } from '../store/actions/BrowseActions'

const mapStateToProps = (state, ownProps) => {
  return {
      items: state.BrowseReducer.items || []
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      onClick: () => {
            dispatch({
                type: 'CHANGE_TITLE',
                text: 'lox'
            })
      },
      fetchItems: () => dispatch(fetchItems())
  }
}

const BrowseContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseView)

export default BrowseContainer