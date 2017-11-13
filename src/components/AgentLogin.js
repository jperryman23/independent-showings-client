import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css';
import Header from './Header';
import Footer from './Footer';
import ContactList from './ContactListComponent'

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom'

import {fetchContacts} from '../actions';

class AgentLogin extends Component {
    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        return (
            <div className="App">
                <Header/>

                <div className="development-body">

                    <h2 className="pageHeaderTitle">Agents Page</h2>

                    <div className="development-text">

                        <h3>
                            TOP AGENTS
                        </h3>
                    </div>

                    <div className="contacts-list">
                        <ContactList contacts={this.props.contactList}/>

                    </div>

                </div>

                <Footer/>
            </div>

        )
    }
}

AgentLogin.propTypes = {
    contactList: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired
}

AgentLogin.defaultProps = {
    contactList: []
}

function mapStateToProps(state) {
    return {contactList: state.contactList}
}

export default connect(mapStateToProps, {fetchContacts})(AgentLogin);
