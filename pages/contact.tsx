import type { NextPage } from 'next'
import React from 'react'
import ContactPage from '../components/ContactPage'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout title='Beyond Vision - Contact Us'>
      <ContactPage />
    </Layout>
  )
}

export default Home
