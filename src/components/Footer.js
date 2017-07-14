import React, {Component} from 'react';
import logo from './favicon.ico';
import '../App.css'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'



export default class Footer extends Component {
    render() {
        return (


                <div className="splash-footer">
                    <div><img src={logo} className="App-logo" alt="logo" /></div>
                    <div> This is my footer </div>
                    <div> 720.530.1459 </div>
                    <div> Denver, Colorado </div>
                </div>


        )
    }
}
