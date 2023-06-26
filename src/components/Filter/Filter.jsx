import { useRef } from 'react'
import { IoIosClose } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux'

import { setFilter } from 'store/contacts/slice.js'
import { selectContacts, selectFilter } from 'store/contacts/selectors'
import { Input, Wrapper } from './Filter.styled'

const Filter = () => {
  const inputRef = useRef()
  const filter = useSelector(selectFilter)
  const contacts = useSelector(selectContacts)
  const dispatch = useDispatch()

  const handleFilterChange = ({ target: { value } }) => {
    if (value.startsWith(' ')) return
    dispatch(setFilter(value))
  }

  const clearInput = () => {
    inputRef.current.focus()
    dispatch(setFilter(''))
  }

  return (
    <Wrapper>
      {filter && (
        <IoIosClose className="close" onClick={clearInput} size={34} />
      )}
      <Input
        disabled={!contacts.length}
        ref={inputRef}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search contact by name"
      />
    </Wrapper>
  )
}

export default Filter
