export const CONTACT_FETCHED = 'CONTACT_FETCHED';

export function contactFetched(contact){
    return {
    type: CONTACT_FETCHED,
    contact
    }
}

function handleResponse(response){
    if (response.ok){
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    }


export function fetchContacts(id) {
    return dispatch => {
        fetch('http://localhost:8080/api/contacts/');
        // .then(res => res.json())
        // .then(data => dispatch(contactFetched(data.contact)))
    }
}
