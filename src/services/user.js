import HtppService from './http'

class UserService {

  async create(name, email, password) {
    try {
      return await HtppService.client('users', { body: { name, email, password }, method: 'POST' })
    } catch (error) {
      throw error
    }
  }

  async get() {
    try {
      return await HtppService.client('users/me')
    } catch (error) {
      throw error
    }
  }

  async update(updates) {
    try {
      return await HtppService.client('users/me', { body: { ...updates }, method: 'PATCH' })
    } catch (error) {
      throw error
    }
  }

  async delete() {
    try {
      return await HtppService.client('users/me', { method: 'DELETE' })
    } catch (error) {
      throw error
    }
  }
}

export default new UserService()