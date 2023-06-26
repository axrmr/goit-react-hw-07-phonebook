import PropTypes from 'prop-types'
import { IoIosClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'

import { deleteContact } from 'store/contacts/thunks.js'

const ContactItem = ({ contact }) => {
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(deleteContact(contact.id))
  }

  return (
    <li>
      <span>
        {contact.name}: {contact.phone}
      </span>
      <button onClick={handleDelete}>
        <IoIosClose className="close" size={35} />
      </button>
    </li>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
}

export default ContactItem
