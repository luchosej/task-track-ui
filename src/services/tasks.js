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

  async create(description, completed) {
    try {
      return await HtppService.client('tasks', { body: { description, completed }, method: 'POST' })
    } catch (error) {
      throw error
    }
  }

  async edit(id, completed) {
    try {
      return await HtppService.client(`tasks/${id}`, { body: { completed }, method: 'PATCH' })
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