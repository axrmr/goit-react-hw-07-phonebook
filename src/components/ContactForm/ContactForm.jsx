import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addContact } from '../../store/contacts/thunks.js'

import isHaveContact from 'helpers/isHaveContact.js'
import { toast } from 'react-hot-toast'
import { selectContacts } from 'store/contacts/selectors.js'
import Form from './ContactForm.styled'

const INITIAL_VALUE = { name: '', phone: '' }

const loadingToast = () => {
  toast.loading('Adding', { duration: 2000 })
}

const ContactForm = () => {
  const [contactData, setContactData] = useState({ ...INITIAL_VALUE })
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const createContact = newContact => {
    if (isHaveContact(contacts, newContact)) {
      alert(` ${newContact.name} is already in contacts!`)
    } else {
      dispatch(addContact(newContact))
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    if (value.startsWith(' ')) return
    setContactData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    createContact(contactData)
    setContactData({ ...INITIAL_VALUE })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contactData.name}
        onChange={handleChange}
        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        placeholder="Rustam Aslanov"
        required
      />
      <input
        type="tel"
        name="phone"
        value={contactData.phone}
        onChange={handleChange}
        pattern="^(\+?[0-9.\(\)\-\s]*)$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        placeholder="088-088-0808"
        required
      />
      <button onClick={loadingToast}>Create</button>
    </Form>
  )
}

export default ContactForm
