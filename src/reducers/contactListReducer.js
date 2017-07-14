import { CONTACT_FETCHED } from '../actions';


export default function contactList(state = [], action ={}){
    console.log(state, action)
    switch(action.type){
        case CONTACT_FETCHED:
            return action.contactList;

        default: return state;
    }
}
