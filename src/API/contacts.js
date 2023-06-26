import axios from 'axios'

class ContactsService {
  static async add(obj) {
    const response = await axios.post('/contacts', obj)
    return response.data
  }

  static async fetchAll() {
    const response = await axios.get('/contacts')
    return response.data
  }

  static async delete(id) {
    const response = await axios.delete('/contacts/' + id)
    return response.data
  }
}

export default ContactsService
