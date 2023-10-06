import Home from '@/components/screens/home/Home'
import { UserData } from '@/interfaces/user.interface'
import { UsersQuery } from '@/queries'

import { GetServerSideProps, NextPage } from 'next'

const HomePage: NextPage<UserData> = ({ users }) => {
  return <Home users={users} />
}

export const getServerSideProps: GetServerSideProps<UserData> = async () => {
  const users = await UsersQuery.getAllUsers()

  return {
    props: { users },
  }
}

export default HomePage
