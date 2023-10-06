import { User } from '@/interfaces/user.interface'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_URL

export const UsersQuery = {
  async getAllUsers() {
    const { data } = await axios.get<User[]>('/users')
    return data
  },

  async getUserById(id: string) {
    const { data } = await axios.get<User[]>('/users', {
      params: { id },
    })
    return data[0]
  },
}
