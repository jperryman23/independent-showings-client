import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css'
import Header from './Header';
import Footer from './Footer';
import ContactList from './ContactListComponent'

import { fetchContacts } from '../actions';

class Contact extends Component {

    componentDidMount(){
    this.props.fetchContacts();
    }
    render(){
        console.log('this.props', this.props);
return (
    <div className="App">
        <Header/>
            <div className="contact-body">
                <h1>Contact Page</h1>


            <div className="contacts-list">
                <h3>Contact List:</h3>



                    <ContactList contacts={this.props.contactList} />
                {/* {this.props.contactList.map(contact => {
                    return  <div>{contact.firstname} {contact._id} </div>
                })} */}

            </div>

            </div>
            <Footer />
        </div>

        )
    }
}

Contact.propTypes ={
    contactList: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired
}

Contact.defaultProps = {
    contactList: []
}

function mapStateToProps(state){
    return{
        contactList: state.contactList
    }
}

 export default connect(mapStateToProps, {fetchContacts})(Contact);
