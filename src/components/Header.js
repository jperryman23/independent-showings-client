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

                <div className="splash">

                    <div className="splash-header">

                        <div className="splash-title">
                            <div>
                                <img src={logo} className="App-logo-header"  alt="logo" />
                            </div>
                        <div className="title-name"> Independent Showings | <small> Making it Easy </small> </div>
                    </div>

                        <div>
                            <div className="large ui inverted blue animated fade button" tabIndex="0">
                                <div className="visible content"> Login </div>
                                <div className="hidden content"> Buyer/Agent </div>
                            </div>

                            <div className="large ui inverted blue animated fade button" tabIndex="0">
                                    <div className="visible content">Sign up </div>
                                    <div className="hidden content"> New User </div>
                            </div>
                        </div>


                    </div>


                <div className="ui six item menu">
                    <Link className="item" to="/Home">Home</Link>
                    <Link className="item" to="/About">About - Network Properties</Link>
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
