import axios from 'axios';

import { LOAD_CONTACTS } from './types';
import { config } from '../config';

const loadContacts = (contacts) => ({
  type: LOAD_CONTACTS,
  contacts,
});

const compare = (firstContact, secondContact) => {
  const firstName = firstContact.name.toLowerCase();
  const secondName = secondContact.name.toLowerCase();

  if (firstName > secondName) {
    return 1;
  }

  if (firstName < secondName) {
    return -1;
  }

  if (firstName === secondName) {
    return firstContact.office > secondContact.office ? 1 : -1;
  }
};

export const loadContactsAsync = () => {
  return (dispatch, getState) => {
    return axios.get(config.API_URL)
      .then(
        (res) => {
          const sortedContacts = res.data.sort(compare);
          dispatch(loadContacts(sortedContacts));
        },
        (error) => {
          console.log('Error loading contacts');
        }
      );
  };
};
