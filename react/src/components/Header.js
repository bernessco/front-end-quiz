
import React, { Component } from 'react';

class Header extends Component {
    static contextTypes = {
        router: () => null
    }
    
    constructor(props) {
        super(props)
        this.state = {
            homeButton: false,
            backable: false
        }
    }

    render() {
        return(
            <header className="app-header">
                {this.state.homeButton &&
                    <button className="app-header__back" onClick={() => (this.state.backable) ? this.context.router.history.goBack() : this.context.router.history.push('/')}>
                        <i className="material-icons" aria-hidden="true">keyboard_arrow_left</i>
                        Home
                    </button>
                }
                <div className="app-header__center">
                    {this.props.image ? <img src={this.props.image} alt={this.props.title}/> : this.props.title}
                </div>
            </header>
        )
    }

    componentDidMount() {
        if (this.context.router.route.match.path === '/' && !this.context.router.route.match.isExact) {
            this.setState({homeButton: true})
        }
        this.context.router.history.listen(route => {
            if (route.state && route.state.fromBrowse) {
                this.setState({backable: true})
            } else {
                this.setState({backable: false})
            }

            if (route.pathname !== '/') {
                this.setState({homeButton: true})
            } else {
                this.setState({homeButton: false})
            }
        })
    }
}
export default Header