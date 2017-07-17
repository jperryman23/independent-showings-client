export const CONTACT_FETCHED = 'CONTACT_FETCHED';

export function contactFetched(contactList){
    // console.log(contacts);
    return {
    type: CONTACT_FETCHED,
    contactList
    }
}

// function handleResponse(response){
//     if (response.ok){
//         return response.json();
//     } else {
//         let error = new Error(response.statusText);
//         error.response = response;
//         throw error;
//     }
//     }


export function fetchContacts(id) {
    return dispatch => {
        fetch('http://localhost:8080/api/contacts/')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            dispatch(contactFetched(data.contacts))
        })
    }
}
