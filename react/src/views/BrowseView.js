import React, { Component } from 'react';
import ItemBox from '../components/ItemBox'
class BrowseView extends Component {
    constructor(props) {
        super(props)
        this.props.fetchItems()
    }
    render() {
        return(
            <section className="app-section">
                {this.props.items.map(item => {
                    return <ItemBox key={item.id} item={item}/>
                })}
                <button>loadmore</button>
            </section>
        )
    }
}

export default BrowseView;
