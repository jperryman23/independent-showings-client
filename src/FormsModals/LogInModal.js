import React, { Component } from 'react';
import { Modal } from 'semantic-ui-react';

import '../App.css';

import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom'

const button1 = (
<div className="large ui inverted blue animated fade button" tabIndex="0">
    <div className="visible content">
        Login
    </div>
    <div className="hidden content">
        Buyer/Agent
    </div>
</div>
)

// $('loginbutton').click(() => {
//     window.location = '/ViewAgent';
// })




export default class LogInModal extends Component {
    // constructor(){
    //     super()
    //     this.state = {username: ''}
    // }
    // handleUserName (event){
    //     this.setState({username:event.target.value})
    //     console.log('un is: ', this.state.username);
    // }
    render(){
        return(

                <Modal size="small" trigger={button1}>


                  <Modal.Content>
                       <form className="ui form">
                           <h3 className="login-form-header">Please Login</h3>
                          <div className="ten wide field">
                              <label>Buyer ID || Agent ID</label>
                              <input type="text" name="AgentID" placeholder="ID Number"  onChange={this.handleUserName}
                              required />
                          </div>

                          <div className="ten wide field">
                                  <label>Password</label>
                                  <input type="text" name="password" placeholder="Enter Password" />
                          </div>

                          <div className="twenty wide field">
                                  <div className="ui checkbox">
                                      <input type="checkbox" tabIndex="0"  />

                                      <label>By clicking Sign up or Login with, I agree to Independent Brokers
                                      <a className="" href="/terms-conditions" target="_blank"> Terms and Conditions</a>.
                                      </label>

                                  </div>

                                  </div>
                                  {/* <a src='/ViewBuyer'> <button className="ui button"> Login </button> </a> */}

                                  <Link to='/ViewBuyer'>
                                     <button className="ui button" > Login
                                     </button>
                                 </Link>
                                  </form>

                  </Modal.Content>
                </Modal>

        )
    }
}
