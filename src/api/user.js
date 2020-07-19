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
    const { token, user } = await client('users/login', { body: { email, password } })
    sessionStorage.setItem('token', token)
    return user
  } catch (error) {
    throw error
  }
}