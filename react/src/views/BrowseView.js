import React, { Component } from 'react';

class BrowseView extends Component {
    constructor(props) {
        super(props)
        this.props.fetchItems()
    }
    render() {
        return(
            <section className="app-section">
                <button>{this.props.items.length}</button>
            </section>
        )
    }
}

export default BrowseView;
