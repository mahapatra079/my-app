import { combineReducers } from "redux";
import contactReducer from "../features/phone-book/reducer/contact-reducer";

const rootReducer = combineReducers({allContacts: contactReducer});

export default rootReducer;