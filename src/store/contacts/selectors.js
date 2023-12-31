export const selectContacts = state => state.contacts

export const selectIsLoading = state => state.isLoading

export const selectError = state => state.error

export const selectFilter = state => state.filter

export const selectFilteredContacts = state => {
  const filter = selectFilter(state)
  const contacts = selectContacts(state)

  if (filter) {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
  }

  return contacts
}
