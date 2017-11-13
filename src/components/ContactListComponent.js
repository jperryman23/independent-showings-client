import React from 'react';
import PropTypes from 'prop-types';

export default function ContactList({contacts}) {
    const emptyMessage = (
        <p>You have no registered Agents.
        </p>
    );

    const contactList = (
        <div className="ui grid">

            {contacts.map(contact => {
                return <div key={contact._id}>

                    <div className="four wide column">{contact.firstname} {contact.lastname}</div>

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
