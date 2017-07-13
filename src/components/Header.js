import React, {Component} from 'react';
import logo from './favicon.ico';
import '../App.css'

import {
  // BrowserRouter as Router,
  // Route,
  Link
} from 'react-router-dom'



export default class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">

            <div>
                <h1>
                    <img src={logo} className="App-logo" alt="logo" /> Independent Showings <small>
                         | making it easy
                    </small>
                </h1>
            </div>

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
                    <div className="visible content">New User</div>
                    <div className="hidden content">
                        Sign Up
                    </div>
            </div>
        </div>

            </div>

                <div className="ui six item menu">
                    <Link className="item" to="/Home">Home</Link>
                    <Link className="item" to="/About">About</Link>
                    <Link className="item" to="/BuyerLogin">Buyer Login
                    </Link>
                    <Link className="item" to="/AgentLogin">Agent Login</Link>
                    <Link className="item" to="/Development">Development</Link>
                    <Link className="item" to="/Contact">Contact</Link>
                </div>
            </div>
        )
    }
}
