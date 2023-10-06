import { ParsedUrlQuery } from 'querystring'

interface UserAdditionalInformation {
  phone: string
  address: string
}

export interface User {
  id: number
  first_name: string
  last_name: string
  email: string
  dateOfBirth: string
  image: string
  additionalInformation: UserAdditionalInformation
}

export interface UserData {
  users: User[]
}

export interface UserDataSingle {
  user: User
}

export interface UserGetPaths extends ParsedUrlQuery {
  id: string
}
