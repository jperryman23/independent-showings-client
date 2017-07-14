import React, { Component } from 'react';
import '../App.css'

import Header from './Header';
import Footer from './Footer';

import {
  // BrowserRouter as Router,
  // Route,
} from 'react-router-dom'

export default class Home extends Component {
    render(){
        return(
        <div className="App">
        <Header />
            <div className="home-page container">
                <h1>Home Page</h1>
                {/* <img className="ui fluid image" src="/../../images/downtown.jpg" /> */}

            </div>

        <Footer />
        </div>
        )
    }
}
