import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

// import Splash from './components/Splash';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(

    <Router>

    <Provider store={store}>
        <App />
    </Provider>
    </Router>

    ,


    document.getElementById('root')
);
