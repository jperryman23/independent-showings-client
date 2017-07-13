import React, { Component } from 'react';
import '../App.css'

import App from '../App';

import Home from './Home';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Splash extends Component {
    render(){
        return(
        <div className="splash">
            <div className="splash-container">
            <div className="splash-header">
                    <Link className="ui inverted button white"  to="/Home">Home</Link>

            </div>

                <div className="splash-body">
                    <h1> Independent Showings </h1>
                </div>

                <div className="splash-footer">
                    <footer>
                        This is my footer
                    </footer>
                </div>

            </div>

                <Route exact path="/Home" component={Home} />

        </div>
        )
    }
}
