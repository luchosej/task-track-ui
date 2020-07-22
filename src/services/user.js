import HtppService from './http'

class UserService {

  async createUser(name, email, password) {
    try {
      return await HtppService.client('users', { body: { name, email, password } })
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()