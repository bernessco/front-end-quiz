import React from 'react';
import ReactDOM from 'react-dom';

import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import AllReducers from './store/reducers'

import './App.css';
import App from './App';

// const loggerMiddleware = createLogger()
const store = createStore(
    AllReducers,
    applyMiddleware(
        thunkMiddleware, 
        // loggerMiddleware
    )
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);