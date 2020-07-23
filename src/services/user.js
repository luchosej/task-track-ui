import HtppService from './http'

class UserService {

  async create(name, email, password) {
    try {
      return await HtppService.client('users', { body: { name, email, password }, method: 'POST' })
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()