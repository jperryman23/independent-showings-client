import React, {Component} from 'react';
import logo from './favicon.ico';
import '../App.css'
// import {Modal, Menu, Segment} from 'semantic-ui-react';
// import createHistory from 'history/createBrowserHistory';
// import {history} from 'react-router';

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
            activeItem: window.location.pathname.substr(1)
        }
        // const history = createHistory()
        // history.listen(this.handleLocationChange)
        this.handleItemClick = this.handleItemClick.bind(this)
    }

    // handleLocationChange(location) {
    //     console.log(location);
    // }


    handleItemClick(e, name) {
        // console.log(e);
        // debugger
        // e.preventDefault()
        this.setState({activeItem: name})
    }

    getNavItemClasses(name) {
        return `item ${this.state.activeItem === name
            ? 'active'
            : ''}`
    }

    render() {

        // const activeItem = this.state

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
                    <Link to='/Home' className={this.getNavItemClasses('Home')} onClick={(e) => this.handleItemClick(e, 'Home')} >
                        Home
                    </Link>

                    <Link  to='/BuyerLogin' className={this.getNavItemClasses('BuyerLogin')} onClick={(e) => this.handleItemClick(e, 'BuyerLogin')} >
                        Buyers
                    </Link>

                    <Link to='/AgentLogin' className={this.getNavItemClasses('AgentLogin')} onClick={(e) => this.handleItemClick(e, 'AgentLogin')}>
                        Agents
                    </Link>

                    <Link to='/Development' className={this.getNavItemClasses('Development')} onClick={(e) => this.handleItemClick(e, 'Development')}>
                        Developement
                    </Link>

                    <Link to="/Contact" className={this.getNavItemClasses('Contact')} onClick={(e) => this.handleItemClick(e, 'Contact')}>
                        Contact
                    </Link>

                    <Link to='/About' className={this.getNavItemClasses('About')} onClick={(e) => this.handleItemClick(e, 'About')}>
                        About
                    </Link>

                    <div className="right inverted menu">
                        <div className=" active item">
                            <div className="ui icon transparent input">
                                <input type="text" placeholder="Search..."/>
                                <i className="search link icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
