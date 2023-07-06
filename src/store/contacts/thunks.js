import { createAsyncThunk } from '@reduxjs/toolkit'
import ContactsService from '../../API/contacts.js'
 
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
