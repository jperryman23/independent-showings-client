import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({contacts}) {
    const emptyMessage = (
        <p>You have no contacts in your collection.
        </p>
    );

    const contactList = (
        <div className="container">

            {contacts.map(contact => {
                return <div key={contact._id}>{contact.firstname} {contact.lastname}{contact._id}
                </div>
            })}
        </div>
    )

    return (
        <div>
            {contacts.length === 0
                ? emptyMessage
                : contactList}
        </div>
    )

}

ContactList.PropTypes = {
    contacts: PropTypes.array.isRequired
}
