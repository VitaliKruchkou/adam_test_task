import { FC, PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'

import { IMeta } from '@/components/seo/meta.interface'
import Meta from '@/components/seo/Meta'

import Header from './header/Header'
import StyledComponentsRegistry from '@/styles/registry'

const DynamicFooter = dynamic(() => import('./footer/Footer'), { ssr: false })

const Layout: FC<PropsWithChildren<IMeta>> = ({ title, description, children }) => {
  return (
    <Meta title={title} description={description}>
      <div>
        <Header />
        <main>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </main>
        <DynamicFooter />
      </div>
    </Meta>
  )
}

export default Layout
