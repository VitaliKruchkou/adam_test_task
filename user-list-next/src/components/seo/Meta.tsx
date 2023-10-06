import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'

import { getTitle } from '@/utils'

import { IMeta } from './meta.interface'

const Meta: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  const metaTitle = getTitle(title)

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        {description ? (
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={metaTitle} />
            <meta name="og:description" content={description} />
          </>
        ) : (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
      {children}
    </>
  )
}

export default Meta
