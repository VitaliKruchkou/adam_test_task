import React, { FC } from 'react'

import Layout from '@/components/layout/Layout'
import { UserDataSingle } from '@/interfaces/user.interface'
import { getFullName } from '@/utils'
import UserItem from '@/components/pages/user/UserItem'

import { useStyles } from './UserDetail.style'
import Image from 'next/image'

const UserDetail: FC<UserDataSingle> = ({ user }) => {
  const styles = useStyles()

  const fullName = getFullName(user)

  return (
    <Layout title={fullName} description="User">
      <div className={styles.container}>
        <Image src={user?.image} alt={user?.first_name} width={300} height={300} />
        <h2>{fullName}</h2>
        <p>Birthday - {user.dateOfBirth}</p>
        <p>Address - {user.additionalInformation.address}</p>
        <p>Phone - {user.additionalInformation.phone}</p>
        <p>Email - {user.email}</p>
      </div>
    </Layout>
  )
}

export default UserDetail
