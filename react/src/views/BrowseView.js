import React, { Component } from 'react'
import ItemBox from '../components/ItemBox'

class BrowseView extends Component {
    
    constructor(props) {
        super(props)
        this.props.changeHeaderTitle('Browse page')
        if (this.props.items.length === 0) {
            this.props.fetchItems()
        }
    }

    render() {
        return(
            <section className="app-section">
                <div className="app-item-list">
                    {this.props.items.map(item => {
                        return <ItemBox onClick={ () => this.props.toogleFavorite(item.id)} liked={this.props.favorites[item.id]} key={ item.id } item={ item }/>
                    })}
                </div>

                {this.props.items.length < this.props.totalItems && 
                    <button onClick={ () => this.props.fetchItems() }> Loadmore </button>
                }
            </section>
        )
    }
}
export default BrowseView
