import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = state => {
    return {
        title: state.HeaderReducer.text,
        image: state.HeaderReducer.image || false
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderContainer