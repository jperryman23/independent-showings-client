import React, {Component} from 'react';
import logo from '../favicon.ico';
import '../../App.css'
// import {Modal, Menu, Segment} from 'semantic-ui-react';


import {
    // BrowserRouter as Router,
    // Route,
    // Link
} from 'react-router-dom'

class AgentHeader extends Component {
    render() {


        return (

            <div className="agent-splash">

                <div className="agent-header">

                    <div className="splash-title">
                        <div>
                            <img src={logo} className="App-logo-header" alt="logo"/>
                        </div>
                        <div className="title-name">
                            Independent Showings |
                            <small>
                                &nbsp; Agent View
                            </small>
                        </div>
                    </div>

                    <div>

                        <div className="large ui inverted green animated fade button" tabIndex="0">
                            <div className="visible content">Log Out
                            </div>
                            <div className="hidden content">
                                Goodbye
                            </div>
                        </div>

                    </div>

                </div>


                <div className="ui secondary pointing inverted menu">
                    <a href='/Home' className="item active"> Home </a>

                    <a href='/BuyerLogin' className="item"> My Listings </a>
                    <a href='/AgentLogin' className="item"> History View </a>

                    <div className="right inverted menu">
                        <div className=" active item">
                            <div className="ui icon transparent input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default AgentHeader
