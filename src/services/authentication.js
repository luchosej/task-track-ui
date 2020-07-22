import StorageService from './storage'
import HttpService from './http'

class AuthenticationService {

  getToken () {
    return StorageService.read('user-token')
  }

  async login(email, password) {
     try {
      const { token, user } = await HttpService.client('users/login', { body: { email, password } })
      StorageService.persist('user-token', token, 'session')
      return user
    } catch (error) {
      throw error
    }
  }
}

export default new AuthenticationService()