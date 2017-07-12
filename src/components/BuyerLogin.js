import React, { Component } from 'react';
import '../App.css'

export default class BuyerLogin extends Component {
    render(){
        return(

            <div className="container">
                <h1>Buyer Login</h1>
                <div className="contentBox">
                <form className="ui form">
                    <div className="six wide field">
                        <label>Buyer ID</label>
                        <input type="text" name="buyerID" placeholder="ID Number" />
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
