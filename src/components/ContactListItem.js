import React from 'react';
import { Image, List, Popup, Icon } from 'semantic-ui-react';

const ContactListItem = ({ contact }) => {
  const more = () => (
    <div dangerouslySetInnerHTML={{ __html: contact.mainText }}></div>
  );
  return (
    <List.Item>
      <Image src={contact.imagePortraitUrl} size='tiny' />
      <List.Content>
        <List.Header>{contact.name}</List.Header>

        <List.Description>
          <List>
          <List.Item>
              <Popup
                content={more}
                on='click'
                inverted
                wide='very'
                trigger={<Icon name='pin' size='large' />}
              />
            </List.Item>
            <List.Item icon='phone' content={contact.phoneNumber} />
            <List.Item icon='marker' content={contact.office} />
            <List.Item
              icon='mail'
              content={<a href={`mailto:${contact.email}`}>{contact.email}</a>}
            />

            <List.Item>
              <List horizontal>
                {contact.linkedIn ? (
                  <List.Item>
                    <List.Icon name='linkedin' />
                    <List.Content>
                      <a
                        href={`http://www.linkedin.com${contact.linkedIn}`}
                      > </a>
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
            </List.Item>
          </List>
        </List.Description>
      </List.Content>
    </List.Item>
  );
};

export default ContactListItem;
