const initialState = {
    contactList: []
}

const contactReducer = (state=initialState, action) => {
    console.log("Reducer ", action.type);
    switch(action.type) {
        case "SET_CONTACT":
            return Object.assign({}, state, {contactList: [...state.contactList, action.value]});
        default:
            return state;
    }

}

export default contactReducer;