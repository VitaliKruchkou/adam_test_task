import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import UserDetail from '@/components/screens/user-detail/UserDetail'
import { User, UserDataSingle, UserGetPaths } from '@/interfaces/user.interface'
import { UsersQuery } from '@/queries'

const UserDetailPage: NextPage<UserDataSingle> = ({ user }) => {
  return (
    <div>
      <UserDetail user={user} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<UserGetPaths> = async () => {
  const users = await UsersQuery.getAllUsers()

  return {
    paths: users?.map((user: User) => ({
      params: {
        id: String(user.id),
      },
    })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<UserDataSingle> = async ({ params }) => {
  const user = await UsersQuery.getUserById(String(params?.id))

  return {
    props: { user },
    revalidate: 60,
  }
}
export default UserDetailPage
