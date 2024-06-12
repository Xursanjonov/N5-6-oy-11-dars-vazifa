import React, { memo } from 'react'

const LazyLoading = () => {
    return (
        <section className='w-[100%] h-screen flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg text-secondary"></span>
        </section>
    )
}

export default memo(LazyLoading)