import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'

import Loader from 'components/Loader/Loader'
import ReactLogo from 'components/ReactLogo/ReactLogo'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectError } from 'store/contacts/selectors'
import { fetchContacts } from 'store/contacts/thunks.js'

import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <ReactLogo />
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
      {error && <div>Error: {error}</div>}
      {isLoading && <Loader />}
    </div>
  )
}

export default App
