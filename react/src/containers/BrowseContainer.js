import { connect } from 'react-redux'
import BrowseView from '../views/BrowseView'
import { fetchItems, toogleFavorite } from '../store/actions/BrowseActions'
import { changeTitle } from '../store/actions/HeaderActions'

const mapStateToProps = state => {
    return {
        items: state.BrowseReducer.items || [],
        isFetching: state.BrowseReducer.isFetching || false,
        totalItems: state.BrowseReducer.totalItems || 0,
        favorites:  state.BrowseReducer.favorites || {}
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItems: limit => dispatch(fetchItems(limit)),
        changeHeaderTitle: text => dispatch(changeTitle(text)),
        toogleFavorite: id => dispatch(toogleFavorite(id))
    }
}

const BrowseContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BrowseView)

export default BrowseContainer