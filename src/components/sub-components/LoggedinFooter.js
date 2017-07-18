import React, {Component} from 'react';
import logo from './favicon.ico';
import '../../App.css'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'



export default class LoggedinFooter extends Component {
    render() {
        return (


                <div className="loggedin-footer">

                    <div> &copy; Copyright 2017</div>
                    <div>  Independent Showings, LLC </div>
                    <div> Denver, Colorado </div>
                    <div> Phone: 720-530-1459 </div>
                    <div> <img src={logo} className="App-logo" alt="logo" /> </div>

                </div>


        )
    }
}