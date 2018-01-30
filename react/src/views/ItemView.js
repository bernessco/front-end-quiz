import React, { Component } from 'react';
class ItemView extends Component {
    constructor(props) {
        super(props)
        this.props.changeHeaderTitle('')
        this.props.fetchItem(this.props.match.params.id).then(() => {
            this.props.changeHeaderTitle(this.props.item.id, 'https://a.1stdibscdn.com'+ this.props.item.seller.logo)
        })
    }

    render() {
        return(
            <h1>{!this.props.isFetching && this.props.item.attributes} || {this.props.favorited ? 'patinka' : ''}</h1>
        )
    }
    
}

export default ItemView;
