import React, { ChangeEvent, FC, useEffect, useState } from 'react'

import Layout from '@/components/layout/Layout'
import { User, UserData } from '@/interfaces/user.interface'
import UserItem from '@/components/pages/user/UserItem'
import { getFullName } from '@/utils'

import { useStyles } from './Home.style'
import HomeForm from './HomeForm'

const Home: FC<UserData> = ({ users }) => {
  const [searchAndSortedUsers, setSearchAndSortedUsers] = useState<User[]>(users)
  const [searchValue, setSearchValue] = useState<string>('')

  const styles = useStyles()

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const sortDirection = e.target.value as keyof Omit<User, 'id' | 'additionalInformation'>

    const sortedUsersByValue = [...users].sort((user1: User, user2: User) =>
      user1[sortDirection!]?.localeCompare(user2[sortDirection!]),
    )

    setSearchAndSortedUsers(sortedUsersByValue)
  }

  useEffect(() => {
    const filteredUsersData = users.filter((user: User) =>
      getFullName(user).toLowerCase().includes(searchValue.toLowerCase()),
    )

    setSearchAndSortedUsers(filteredUsersData)
  }, [searchValue])

  return (
    <Layout title="Home" description="Users list">
      <HomeForm
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSelectChange={handleSelectChange}
      />
      <div className={styles.container} aria-label="cost-container">
        {searchAndSortedUsers?.length > 0 ? (
          searchAndSortedUsers.map((user: User) => <UserItem key={user.id} user={user} />)
        ) : (
          <div>User not found</div>
        )}
      </div>
    </Layout>
  )
}

export default Home
