import React from 'react';
import { List } from 'semantic-ui-react';

import ContactListItem from './ContactListItem';

const ContactList = ({ contacts }) => (
  <List animated verticalAlign='middle' divided>
    {contacts.map((contact) => (
      <ContactListItem key={contact.email} contact={contact} />
    ))}
  </List>
);

export default ContactList;
