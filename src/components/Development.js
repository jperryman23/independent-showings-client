import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Footer from './Footer';

export default class Development extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
            <div className="container">
                <h1>Development / Investors Page</h1>
            </div>
        <Footer />
        </div>
        )
    }
}
