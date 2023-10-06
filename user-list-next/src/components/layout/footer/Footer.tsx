import React, { FC } from 'react'

import { getFullYear } from '@/utils'
import { useStyles } from './Footer.style'

const Footer: FC = () => {
  const style = useStyles()

  const year = getFullYear()

  return <div className={style.container}>User list &copy; {year}</div>
}

export default Footer
