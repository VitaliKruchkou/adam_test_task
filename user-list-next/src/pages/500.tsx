import Layout from '@/components/layout/Layout'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const ServersError: NextPage = () => {
  return (
    <Layout title="500">
      <Head>
        <title>Servers Error</title>
      </Head>
      <div style={{ textAlign: 'center' }}>
        <Image src="/500.png" alt="" width={450} height={433} priority />
      </div>
    </Layout>
  )
}

export default ServersError
