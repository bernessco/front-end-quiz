import React, { Component } from 'react';
class BrowseView extends Component {
    constructor(props) {
        super(props)
        this.props.fetchItem(this.props.match.params.id)
        this.props.changeHeaderTitle(this.props.item.id)
        console.log(this)
    }
    render() {
        return(
            <h1>{!this.props.isFetching && this.props.item.attributes}</h1>
        )
    }
}

export default BrowseView;
