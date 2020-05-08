import React from 'react'
import {Card} from 'semantic-ui-react'
import ContactCard from './ContactCard'


const ContactCardList = ({contacts}) => (
    <Card.Group>
        {contacts.map( contact => (<ContactCard  key={contact.email} contact={contact} />))}
    </Card.Group>
    
)

export default ContactCardList