import React, { Component } from 'react';
import '../App.css'

import App from '../App';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Splash extends Component {
    render(){
        return(
            <div className="container">
                <h1>Splash Page</h1>
                <div>
                <Link className="item"  to="/Home">Home</Link>
                </div>
                <Route exact path="/Home" component={App} />
            </div>
        )
    }
}
