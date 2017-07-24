import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import ContactList from './ContactListComponent'

import {fetchContacts} from '../actions';

class Contact extends Component {

    componentDidMount() {
        this.props.fetchContacts();
    }
    render() {
        console.log('this.props', this.props);
        return (
            <div className="App">
                <Header  />

                <div className="contact-body">
                    <h2 className="pageHeaderTitle">Contact Page</h2>

                    <div className="myContactInfo">
                        <h1>Jules R. Perryman</h1>
                        <br></br>
                        <h3>720.530.1459</h3>
                        <br></br>
                        <h3>Galvainze G[46]</h3>
                        <br></br>
                        <a href="www.julesperryman.com">WEBSITE</a>
                    </div>


                </div>
                <div className="contacts-list">
                    <h3>Contact List:</h3>
                    <ContactList contacts={this.props.contactList}/>

                </div>
                
                <Footer />
            </div>

        )
    }
}

Contact.propTypes = {
    contactList: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired
}

Contact.defaultProps = {
    contactList: []
}

function mapStateToProps(state) {
    return {contactList: state.contactList}
}

export default connect(mapStateToProps, {fetchContacts})(Contact);
