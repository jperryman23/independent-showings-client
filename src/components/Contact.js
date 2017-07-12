import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../App.css'

import { fetchContacts } from '../actions';

class Contact extends Component {

    componentDidMount(){
    this.props.fetchContacts();
    }
    render(){
        return(
            <div className="container">
                <h1>Contact</h1>


            <div className="container">
                <h3>Contact List</h3>

            </div>

            </div>

        )
    }
}

Contact.propTypes ={
    contactList: PropTypes.array.isRequired,
    fetchContacts: PropTypes.func.isRequired
}
function mapStateToProps(state){
    return{
        contactList: state.contactList
    }
}

 export default connect(mapStateToProps, {fetchContacts})(Contact);
