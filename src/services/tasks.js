import HtppService from './http'
import { HttpService } from 'services'

class TaskService {

  async getAll() {
    try {
      return await HtppService.client('tasks?sortBy=createdAt:desc')
    } catch (error) {
      throw error
    }
  }

  async create(title, description, completed) {
    try {
      return await HtppService.client('tasks', { body: { title, description, completed }, method: 'POST' })
    } catch (error) {
      throw error
    }
  }

  async edit(id, { description, completed, state } ) {
    try {
      return await HtppService.client(`tasks/${id}`, { body: { description, completed, state }, method: 'PATCH' })
    } catch (error) {
      throw error
    }
  }

  async delete(id) {
    try {
      return await HttpService.client(`tasks/${id}`, { method: 'DELETE' })
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()