import React, { Component } from 'react';
import '../App.css'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

export default class AgentLogin extends Component {
    render(){
        return(

        <div className="container">
            <h1>Agent Login</h1>
            <div className="contentBox">
            <form className="ui form">
                <div className="six wide field">
                    <label>Agent ID</label>
                    <input type="text" name="AgentID" placeholder="ID Number" />
                    </div>
                    <div className="six wide field">
                        <label>Password</label>
                        <input type="text" name="password" placeholder="Enter Password" />
                        </div>
                        <div className="six wide field">
                            <div className="ui checkbox">
                                <input type="checkbox" tabIndex="0" className="hidden" />
                                    <label>By clicking Sign up or Continue with, I agree to Independent Brokers
                                        <a className="" href="/terms-conditions" target="_blank"> Terms and Conditions</a>
                                    </label>
                                </div>
                        </div>
                            <button className="ui button" type="submit">Submit</button>
                        </form>
                    </div>
                </div>

        )
    }
}
