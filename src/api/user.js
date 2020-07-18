import { client } from './utils'

export async function createUserAPI(name, email, password) {
  try {
    return await client('users', { body: { name, email, password } })
  } catch (error) {
    throw error
  }
}

export async function loginUserAPI(email, password) {
  try {
    return await client('users/login', { body: { email, password } })
  } catch (error) {
    throw error
  }
}