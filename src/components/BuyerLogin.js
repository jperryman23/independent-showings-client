import React, { Component } from 'react';
import '../App.css'

export default class BuyerLogin extends Component {
    render(){
        return(

            <div>
                {/* <div className="container"> */}

                <h1>Buyer Login</h1>
                <form className="ui form">
                    <div className="eight wide field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" />
                        </div>
                        <div className="eight wide field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name" />
                            </div>
                            <div className="eight wide field">
                                <div className="ui checkbox">
                                    <input type="checkbox" tabindex="0" className="hidden" />
                                        <label>I agree to the Terms and Conditions</label>
                                    </div>
                                </div>
                                <button className="ui button" type="submit">Submit</button>
                            </form>
                    {/* </div> */}
            </div>
        )
    }
}
