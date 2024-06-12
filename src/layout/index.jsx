import React, { memo } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'

const Layout = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <Header />
            <main className='max-w-[1480px] mx-auto'> <Outlet /> </main>
            <Footer />
        </div>
    )
}

export default memo(Layout)