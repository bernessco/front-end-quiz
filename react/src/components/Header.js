
import React, { Component } from 'react';

class Header extends Component {
    static contextTypes = {
        router: () => null
    }
    
    constructor(props) {
        super(props)
        this.state = {
            homeButton: false
        }
    }

    render() {
        return(
            <header className="app-header">
                {(this.state.homeButton)
                    ? <button className="app-header__back" onClick={() => this.context.router.history.push('/')}>Home</button>
                    : ''
                }
                <div className="app-header__center">
                    {this.props.image ? <img src={this.props.image} alt={this.props.title}/> : this.props.title}
                </div>
            </header>
        )
    }

    componentDidMount() {
        console.log(this)
        if (this.context.router.route.match.path === '/' && !this.context.router.route.match.isExact) {
            this.setState({homeButton: true})
        }
        this.context.router.history.listen(route => {
            if (route.pathname !== '/') {
                this.setState({homeButton: true})
            } else {
                this.setState({homeButton: false})
            }
        })
    }
}
export default Header