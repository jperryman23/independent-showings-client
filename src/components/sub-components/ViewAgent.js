import React, { Component } from 'react';
import '../App.css';
import Header from './Header';

export default class ViewAgent extends Component {
    render(){
        return(
            <div className="App">
                <Header/>
            <div className="container">
                <h1>Profile / Login in Page for Agents</h1>
            </div>
        </div>
        )
    }
}
