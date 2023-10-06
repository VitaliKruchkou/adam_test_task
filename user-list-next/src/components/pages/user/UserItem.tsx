import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { UserDataSingle } from '@/interfaces/user.interface'
import { getFullName } from '@/utils'
import { useStyles } from './UserItem.style'

const UserItem: FC<UserDataSingle> = ({ user }) => {
  const style = useStyles()

  const fullName = getFullName(user)

  return (
    <div className={style.container}>
      <Image src={user?.image} alt={user?.first_name} width={300} height={300} />
      <h2>{fullName}</h2>
      <p>Birthday - {user.dateOfBirth}</p>
      <p>Email - {user.email}</p>

      <Link href={`/user/${user?.id}`}>Read more</Link>
    </div>
  )
}

export default UserItem
