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

  async edit(id, updates) {
    try {
      return await HtppService.client(`tasks/${id}`, { body: { ...updates}, method: 'PATCH' })
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

  async addComment(id, comment) {
    try {
      return await HttpService.client(`tasks/${id}/comments`, { body: { comment }, method: 'POST'})
    } catch (error) {
      throw error
    }
  }

  async deleteComment(id, commentId) {
    try {
      return await HttpService.client(`tasks/${id}/comments/${commentId}`, { method: 'DELETE'})
    } catch (error) {
      throw error
    }
  }
}

export default new TaskService()