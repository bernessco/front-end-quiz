
import React from 'react'
import { Link } from 'react-router-dom'

const ItemBox = ({ item, onClick, liked }) => {
    return(
        <div className="app-item-list__item">
            <div className="app-item-list__item-container">
                <Link to={ {pathname: `/item/${item.id}`, state: {fromBrowse: true}} }>
                    <div className="app-item-list__item-image">
                        <img src={item.image} alt={item.title}/>
                    </div>
                </Link>
                <div className="app-item-list__item-info">
                    <div className="app-item-list__item-price">{ item.price ? item.price.amounts.USD : 'No price' }</div>
                    <div className="app-item-list__item-heart" onClick={onClick}> 
                     { (liked) ? <i className="material-icons" aria-hidden="true">favorite</i> : <i className="material-icons" aria-hidden="true">favorite_border</i> }
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemBox