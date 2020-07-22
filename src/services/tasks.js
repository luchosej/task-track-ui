import HtppService from './http'

class TaskService {

  async getAll() {
    try {
      return await HtppService.client('tasks')
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()