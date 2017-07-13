import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

export default class Development extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
            <div className="container">
                <h1>Development Page</h1>
            </div>
        </div>
        )
    }
}
