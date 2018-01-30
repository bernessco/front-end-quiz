import { connect } from 'react-redux'
import ItemView from '../views/ItemView'
import { fetchItem } from '../store/actions/ItemActions'
import { changeTitle } from '../store/actions/HeaderActions'

const mapStateToProps = state => {
    return {
        item: state.ItemReducer.item || {},
        isFetching: state.ItemReducer.isFetching || false,
        favorited:  state.BrowseReducer.favorites[state.ItemReducer.item.id] || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchItem: (id) => dispatch(fetchItem(id)),
        changeHeaderTitle: (text, image) => dispatch(changeTitle(text, image))
    }
}

const ItemContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemView)

export default ItemContainer