
import React from 'react'
// import PropTypes from 'prop-types'

const Header = ({ title, image }) => (
    <header className="app-header">
        <button className="app-header__back">Home</button>
        <div className="app-header__center">
            {image ? <img src={image} alt={title}/> : title}
        </div>
    </header>
)

// Header.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired
// }

export default Header