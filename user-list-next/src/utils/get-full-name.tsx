import { User } from '@/interfaces/user.interface'

export const getFullName = (user: User) => `${user.first_name} ${user.last_name}`
