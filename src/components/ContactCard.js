import React from 'react';
import { Popup, Card, Image } from 'semantic-ui-react';

const ContactCard = ({ contact }) => (
  <Popup
    trigger={
      <Card>
        <Image src={contact.imagePortraitUrl} wrapped ui={false} size='small' />
        <Card.Content>
          <Card.Header>{contact.name}</Card.Header>
          <Card.Meta>
            <span className='email'>{contact.email}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>{contact.office}</Card.Content>
      </Card>
    }
    wide='very'
  >
    <Popup.Header>Profile</Popup.Header>
    <Popup.Content>
      <div dangerouslySetInnerHTML={{ __html: contact.mainText }}></div>
    </Popup.Content>
  </Popup>
);

export default ContactCard;
