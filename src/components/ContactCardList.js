import React from 'react'
import {Card} from 'semantic-ui-react'
import ContactCard from './ContactCard'


const ContactCardList = ({contacts}) => (
    <Card.Group>
        {contacts.map( contact => (<ContactCard contact={contact} />))}
    </Card.Group>
    
)

export default ContactCardList