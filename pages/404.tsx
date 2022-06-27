import Link from 'next/link'
import React from 'react'

const Error = () => {
  return (
    <div className="flex justify-center items-center w-full bg-background">
        <section className="flex justify-center items-center w-full h-screen flex-col">
            <h1 className="text-4xl text-yellow font-bold">404</h1>
            <Link href="/">
                 <p className='text-text hover:text-textaccent duration-150 cursor-pointer'>Return to the home page.</p>
            </Link>
        </section>
    </div>
  )
}

export default Error