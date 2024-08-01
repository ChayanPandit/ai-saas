import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({children}:{children: React.ReactNode}) => {
  return (
    <main className='root bg-slate-200 relative'>
      <Sidebar/>
      <MobileNav/>
        <div className='mt-8 overflow-auto max-h-screen h-full w-full px-8'>
            <div className='max-w-5xl mx-auto px-5 w-full h-full'>
                {children}
            </div>
        </div>
      <Toaster/>
    </main>
  )
}

export default Layout