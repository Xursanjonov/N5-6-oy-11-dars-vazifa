import React, { memo } from 'react'

const Footer = () => {
    return (
        <footer className='w-[100%] mx-auto bg-white border-2'>
            <div className='max-w-[1480px] mx-auto py-2 grid grid-cols-5 gap-4'>
                <h2>Footer</h2>
                <h2>Footer</h2>
                <h2>Footer</h2>
                <h2>Footer</h2>
                <h2>Footer</h2>
            </div>
        </footer>
    )
}

export default memo(Footer)