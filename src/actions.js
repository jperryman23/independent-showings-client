export function fetchContacts(id) {
    return dispatch => {
        fetch('http:localhost:8080/contacts/');
        // .then(res => res.json())
        // .then(data => dispatch(gameFetched(data.game)))
    }
}
