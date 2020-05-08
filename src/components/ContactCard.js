import React from 'react';
import { Popup, Card, Image, List, Icon } from 'semantic-ui-react';

const ContactCard = ({ contact }) => {
  const more = () => (
    <div dangerouslySetInnerHTML={{ __html: contact.mainText }}></div>
  );
  return (
    <Card>
      <Image src={contact.imagePortraitUrl} wrapped ui={false} size='small' />
      <Card.Content>
        <Card.Header>{contact.name}</Card.Header>
        <Card.Description> {contact.office}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <List horizontal floated='right' size='large'>
          <List.Item>
            <Popup
              content={more}
              on='click'
              inverted
              wide='very'
              position='right center'
              trigger={<Icon name='pin' />}
            />
          </List.Item>
        </List>
        <List horizontal>
          {contact.linkedIn ? (
            <List.Item>
              <List.Icon name='linkedin' />
              <List.Content>
                <a href={`http://www.linkedin.com${contact.linkedIn}`}> </a>
              </List.Content>
            </List.Item>
          ) : null}

          {contact.gitHub ? (
            <List.Item>
              <List.Icon name='github' />
              <List.Content>
                <a href={`http://www.github.com/${contact.gitHub}`}> </a>
              </List.Content>
            </List.Item>
          ) : null}

          {contact.twitter ? (
            <List.Item>
              <List.Icon name='twitter' />
              <List.Content>
                <a href={`http://www.twitter.com/${contact.twitter}`}> </a>
              </List.Content>
            </List.Item>
          ) : null}
        </List>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
