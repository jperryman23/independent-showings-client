import React, {Component} from 'react';
import logo from './favicon.ico';
import '../App.css'
import { Modal } from 'semantic-ui-react'

import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'



// const ModalModalExample = () => (
//   <Modal size="small" trigger={<Button>Login</Button>}>
//
//     <Modal.Content>
//         <h1>Please Log in</h1>
//       <Modal.Description>
//         <h3>Default Profile Image</h3>
//         <p>We've found the following gravatar image associated with your e-mail address.</p>
//         <p>Is it okay to use this photo?</p>
//       </Modal.Description>
//     </Modal.Content>
//   </Modal>
// )


export default class Header extends Component {
    constructor(){
        super()
    }
    render() {
        return (

            <div className="splash">

                <div className="splash-header">

                    <div className="splash-title">
                        <div>
                            <img src={logo} className="App-logo-header" alt="logo"/>
                        </div>
                        <div className="title-name">
                            Independent Showings |
                            <small>
                                &nbsp; Making it Easy
                            </small>
                        </div>
                    </div>

                    <div>


                          <Modal size="small" trigger={
                              <div className="large ui inverted blue animated fade button" tabIndex="0">
                                  <div className="visible content">
                                      Login
                                  </div>
                                  <div className="hidden content">
                                      Buyer/Agent
                                  </div>
                              </div>}>

                            <Modal.Content>
                                <form className="ui form">
                                     <h3>Please Login</h3>
                                    <div className="six wide field">
                                        <label>Agent ID</label>
                                        <input type="text" name="AgentID" placeholder="ID Number" />
                                    </div>

                                    <div className="six wide field">
                                            <label>Password</label>
                                            <input type="text" name="password" placeholder="Enter Password" />
                                    </div>

                                    <div className="twenty wide field">
                                            <div className="ui checkbox">
                                                <input type="checkbox" tabIndex="0" className="hidden" />

                                                <label>By clicking Sign up or Continue with, I agree to Independent Brokers
                                                <a className="" href="/terms-conditions" target="_blank"> Terms and Conditions</a>.
                                                </label>

                                            </div>

                                            </div>
                                                <button className="ui button" type="submit">Submit</button>
                                            </form>

                            </Modal.Content>
                          </Modal>


                        {/* <div className="large ui inverted blue animated fade button" tabIndex="0">
                            <div className="visible content">
                                Login
                            </div>
                            <div className="hidden content">
                                Buyer/Agent
                            </div>
                        </div> */}

                        <div className="large ui inverted blue animated fade button" tabIndex="0">
                            <div className="visible content">Sign up
                            </div>
                            <div className="hidden content">
                                New User
                            </div>
                        </div>
                    </div>

                </div>

                <div className="ui pointing menu">
                    <Link className="item" to="/Home">Home</Link>
                    <Link className="item" to="/About">About - Network Properties</Link>
                    <Link className="item" to="/BuyerLogin">Buyer Login
                    </Link>
                    <Link className="item" to="/AgentLogin">Agent Login</Link>
                    <Link className="item" to="/Development">Development</Link>
                    <Link className="item" to="/Contact">Contact</Link>
                </div>


            </div>

        )
    }
}
