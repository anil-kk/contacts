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
              <List.Content>
                <a target="_blank" rel="noopener noreferrer" href={`http://www.linkedin.com${contact.linkedIn}`} ><Icon name='linkedin' /></a>
              </List.Content>
            </List.Item>
          ) : null}

          {contact.gitHub ? (
            <List.Item>
              <List.Content>
                <a target="_blank" rel="noopener noreferrer" href={`http://www.github.com/${contact.gitHub}`}><Icon name='github' /></a>
              </List.Content>
            </List.Item>
          ) : null}

          {contact.twitter ? (
            <List.Item>
              <List.Content>
                <a target="_blank" rel="noopener noreferrer" href={`http://www.twitter.com/${contact.twitter}`}><Icon name='twitter' /></a>
              </List.Content>
            </List.Item>
          ) : null}
        </List>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
