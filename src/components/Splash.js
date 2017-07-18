import React, { Component } from 'react';
import '../App.css'

import App from '../App';

import Home from './';

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
                <div> <img src={logo} className="App-logo" alt="logo" />
                <h1 className="splash-title"> Independent Showings | <small>Making it Easy</small> </h1></div>
                <div>

                    <div className="large ui inverted blue animated fade button" tabIndex="0">
                        <div className="visible content">
                            &nbsp; &nbsp; Login &nbsp; &nbsp;
                        </div>
                        <div className="hidden content">
                            Buyer/Agent
                        </div>
                    </div>

                    <div className="large ui inverted blue animated fade button" tabIndex="0">
                            <div className="visible content">Sign up </div>
                            <div className="hidden content"> New User </div>
                    </div>

                </div>
            </div>

            <div className="splash-body">
                {/* <h5 className="splash-state"> Sample Data Test </h5> */}
            </div>

            <div className="splash-footer">
                <footer>
                    This is my footer
                </footer>
            </div>

        </div>

        </div>
        )
    }
}
