import React, {Component} from 'react';
import logo1 from './is1.png';
import '../../App.css'
// import {Modal, Menu, Segment} from 'semantic-ui-react';

import {
    // BrowserRouter as Router,
    // Route,
    // Link
} from 'react-router-dom'

class BuyerHeader extends Component {
    render() {

        return (

            <div className="agent-splash">

                <div className="agent-header">

                    <div className="splash-title">
                        <div>
                            <img src={logo1} className="App-logo-header" alt="logo"/>
                        </div>
                        <div className="title-name">
                            Independent Showings |
                            <small>
                                &nbsp; Buyer Portal
                            </small>
                        </div>
                    </div>

                    <div>

                        <div className="large ui black animated fade button" tabIndex="0">
                            <div className="visible content"> <a href='/'> Log Out </a>
                            </div>
                            <div className="hidden content">
                                Goodbye
                            </div>
                        </div>

                    </div>

                </div>

                <div className="ui secondary pointing inverted menu">
                    <a href='/' className="item active">
                        Home
                    </a>
                    <a href='' className="item">
                        My Showings
                    </a>
                    <a href='' className="item">
                        History View
                    </a>
                    <a href='' className="item">
                        Scheduled Showings
                    </a>

                    <div className="right inverted menu">
                        <div className=" active item">
                            <div className="ui icon transparent input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default BuyerHeader
