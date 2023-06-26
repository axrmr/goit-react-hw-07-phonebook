import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import ContactsService from '../../API/contacts.js'

axios.defaults.baseURL = 'https://64957015b08e17c917921c3b.mockapi.io'

export const addContact = createAsyncThunk('contacts/addContact', obj =>
  ContactsService.add(obj)
)

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  ContactsService.fetchAll
)

export const deleteContact = createAsyncThunk('contacts/deleteContact', id =>
  ContactsService.delete(id)
)
