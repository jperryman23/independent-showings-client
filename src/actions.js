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



// FETCH CONTACTS

export function fetchContacts(id) {
    return dispatch => {
        fetch('http://localhost:8080/api/contacts/')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return dispatch(contactFetched(data))

        })
    }
}


// FETCH PROPERTIES
// export function fetchProperties(id) {
//     return dispatch => {
//         fetch('http://localhost:8080/api/contacts/')
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             return dispatch(propertyFetched(data))
//
//         })
//     }
// }
