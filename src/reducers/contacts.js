import { LOAD_CONTACTS } from '../actions/types';

const contacts = (state = [], action) => {
  switch (action.type) {
    case LOAD_CONTACTS:
      return action.contacts;
    default:
      return state;
  }
};
export default contacts;
