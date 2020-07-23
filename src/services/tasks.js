import HtppService from './http'

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
      return await HtppService.client('tasks', { body: { description, completed } })
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()