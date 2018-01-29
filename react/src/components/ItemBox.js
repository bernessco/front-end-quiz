
import React from 'react'
import { Link } from 'react-router-dom'
const ItemBox = ({ item }) => {
    return(
        <Link to={{
            pathname:`/item/${item.id}`,
            state: {
                backable: true
            }
        }}>
            <img src={item.image} alt="a"/>
        </Link>
    )
}

export default ItemBox