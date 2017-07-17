import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

export default class AgentLogin extends Component {
    render(){
        return(
        <div className="App">
            <Header />
            <div className="development-body">

                <h2>Agents Page</h2>

            <div className="development-text">

                <h3> New Features</h3>
            </div>

            </div>
            <Footer />
            </div>

        )
    }
}
