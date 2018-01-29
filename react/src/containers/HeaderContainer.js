import { connect } from 'react-redux'
import Header from '../components/Header'

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.HeaderReducer.text || ownProps.title
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderContainer