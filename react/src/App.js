import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppHeader from './containers/HeaderContainer';
import BrowseView from './containers/BrowseContainer.js';

class App extends Component {
  render() {
    return (
      <Router>
        <main className="app-main">
          <AppHeader title="Browse"/>
          <Route exact path="/" component={ BrowseView }/>
        </main>
      </Router>
    );
  }
}

export default App;
