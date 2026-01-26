import { createStore } from 'redux';
import contactReducer from './components/redux/phone-book/reducer/contact-reducer';

const store = createStore(contactReducer);

export default store;