import { combineReducers } from "redux";
import contactReducer from "../components/redux/phone-book/reducer/contact-reducer";
import counterReducer from "../components/redux/features/reducer/counterReducer";

const rootReducer = combineReducers({
  allContacts: contactReducer,
  counter: counterReducer
});

export default rootReducer;