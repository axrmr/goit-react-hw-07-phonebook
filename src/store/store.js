import { configureStore } from '@reduxjs/toolkit'

import contacts from './contacts/slice.js'

export const store = configureStore({
  reducer: contacts,
})
