import { LOAD_CONTACTS } from './types';
import { config } from '../config';

const loadContacts = (contacts) => ({
  type: LOAD_CONTACTS,
  contacts,
});

export const loadContactsAsync = () => {
  return (dispatch, getState) => {
    return fetch(config.API_URL)
      .then((res) => res.json())
      .then(
        (contacts) => {
          dispatch(loadContacts(contacts));
        },
        (error) => {
          console.log('Error loading contacts');
        }
      );
  };
};
