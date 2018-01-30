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
            <section className="app-section">
            {!this.props.isFetching && 
                <div className="app-item-view">
                    <div className="app-item-view__box app-item-view__image">
                        <div className="app-item-view__image-heart" onClick={ () => this.props.toogleFavorite(this.props.item.id)}> 
                            { (this.props.favorited)
                                ? <i className="material-icons" aria-hidden="true">favorite</i>
                                : <i className="material-icons" aria-hidden="true">favorite_border</i>
                            }
                        </div>
                        <img src={this.props.item.image} alt={this.props.item.attributes}/>
                    </div>

                    <div className="app-item-view__content">
                        <div className="app-item-view__box app-item-view__content-info">
                            <h1>{this.props.item.attributes}</h1>
                            <h2>{ this.props.item.price ? this.props.item.price.amounts.USD : 'No price' }</h2>
                            <div className="app-item-view__measurements">
                                <span className="app-item-view__measurements-title">Measurements:</span>
                                <span className="app-item-view__measurements-content">{this.props.item.measurements && this.props.item.measurements.display}</span>
                            </div>
                            <div className="app-item-view__actions">
                                <button className="app-item-view__actions-button">Purchase</button>
                                <button className="app-item-view__actions-button">Make offer</button>
                            </div>
                        </div>
                        <div className="app-item-view__box app-item-view__content-description">
                            <p>{this.props.item.description}</p>
                            {this.creator()}
                        </div>
                    </div>
                </div>
            }
            </section>
        )
    }

    creator () {
        if (this.props.item.creators) {
            return(
                <div className="app-item-view__creator">
                    <span>Creator:</span>
                    <span>{this.props.item.creators}</span>
                </div>
            )
        }
    }
}

export default ItemView;
