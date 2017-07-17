import React, { Component } from 'react';
import '../App.css';
import App from '../App'
import AgentHeader from './AgentHeader';
import Footer from '../Footer'

export default class ViewAgent extends Component {
    render(){
        return(
        <div className="App">
                <AgentHeader/>
            <div className="container">
                <h1>Profile / Login in Page for Agents</h1>
            </div>
            <Footer />
        </div>
        )
    }
}
