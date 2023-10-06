import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import { useStyles } from './Header.style'

import { css } from '@emotion/css'

const Header: FC = () => {
  const style = useStyles()

  const { pathname } = useRouter() || { pathname: '/' }

  return (
    <header className={style.container}>
      <Link href="/" className={css(style.container, pathname === '/' && style.activeLink)}>
        Home
      </Link>
      <Link
        href="/about"
        className={css(style.container, pathname === '/about' && style.activeLink)}
      >
        About page
      </Link>
    </header>
  )
}

export default Header
