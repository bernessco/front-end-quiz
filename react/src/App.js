import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHeader from './containers/HeaderContainer'
import BrowseView from './containers/BrowseContainer'
import ItemView from './containers/ItemContainer'

class App extends Component {
    render() {
        return (
            <Router>
                <main className="app-main">
                    <AppHeader title="Browse"/>
                    <Route exact path="/" component={ BrowseView }/>
                    <Route exact path="/item/:id" component={ ItemView }/>
                </main>
            </Router>
        )
    }
}

export default App
