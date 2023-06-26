import { useSelector } from 'react-redux'

import ContactItem from 'components/ContactItem/ContactItem'
import { selectFilteredContacts } from 'store/contacts/selectors'
import List from './ContactList.styled'

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts)

  return (
    <List>
      {filteredContacts.length ? (
        filteredContacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))
      ) : (
        <h3>No contacts here</h3>
      )}
    </List>
  )
}

export default ContactList
