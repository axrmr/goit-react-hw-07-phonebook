import { createSlice } from '@reduxjs/toolkit'

import { addContact, deleteContact, fetchContacts } from './thunks.js'

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
}

const REQUEST_STATUSES = {
  PENDING: '/pending',
  REJECTED: '/rejected',
}

const handlePending = state => {
  state.isLoading = true
}

const handleRejected = (state, { error }) => {
  state.isLoading = false
  state.error = error.message
}

const pendingMatcher = action => action.type.endsWith(REQUEST_STATUSES.PENDING)
const rejectedMatcher = action =>
  action.type.endsWith(REQUEST_STATUSES.REJECTED)

const handleAddFulfilled = (state, { payload }) => {
  state.isLoading = false
  state.error = null
  state.contacts.push(payload)
}

const handleFetchFulfilled = (state, { payload }) => {
  state.isLoading = false
  state.error = null
  state.contacts = payload
}

const handleDeleteFulfilled = (state, { payload }) => {
  state.isLoading = false
  state.error = null
  state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
}

const slice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addMatcher(pendingMatcher, handlePending)
      .addMatcher(rejectedMatcher, handleRejected)
  },
})

export const { setFilter } = slice.actions
export default slice.reducer
