import { client } from '../utils'

export default async function createUserAPI(name, email, password) {
  try {
    await client('users', { body: { name, email, password } })
  } catch (error) {
    throw error
  }
}