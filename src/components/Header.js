import React, {Component} from 'react';
import logo from './favicon.ico';
import '../App.css'
// import {Modal, Menu, Segment} from 'semantic-ui-react';


import LogInModal from '../FormsModals/LogInModal';

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
    constructor() {
        super()
        this.state = {
            activeItem: 'active'
        }
                const onClick = (e, { name }) => this.setState({ activeItem: name })
    }
    render() {

         const activeItem = this.state

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

                        <LogInModal/>

                        <div className="large ui inverted blue animated fade button" tabIndex="0">
                            <div className="visible content">Sign up
                            </div>
                            <div className="hidden content">
                                New User
                            </div>
                        </div>

                    </div>

                </div>




                <div className="ui secondary pointing inverted menu">
                    <a href='/Home' className="item active" name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                      Home
                    </a>

                    <a href='/BuyerLogin' className="item" name='buyers' active={activeItem === 'buyers'} onClick={this.handleItemClick}>
                      Buyers
                    </a>
                    <a href='/AgentLogin' className="item" name='agents' active={activeItem === 'agents'} onClick={this.handleItemClick}>
                      Agents
                    </a>
                    <a href='/Development' className="item" name='development' active={activeItem === 'development'} onClick={this.handleItemClick}>
                      Developement
                    </a>
                    <a href="/Contact" className="item" name='contact' active={activeItem === 'contact'} onClick={this.handleItemClick}>
                      Contact
                    </a>
                    <a href='/About' className="item item" name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>
                      About
                    </a>

                    <div className="right inverted menu">
                        <div className=" active item">
                            <div className="ui icon transparent input">
                                <input type="text" placeholder="Search..." />
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
