import React from 'react'
import Head from 'next/head'
import { GetStaticProps } from 'next'

export interface user {
  login: string
  url: string
}

const StaticSample: React.FC<{ user: user }> = ({ user }) => {
  return (
    <>
      <Head>StaticSample</Head>
      <main>
        <h1>StaticSample</h1>
        <h1>{user.login}</h1>
        <p>{user.url}</p>
      </main>
    </>
  )
}

export default StaticSample

export const getStaticProps: GetStaticProps = async () => {
  const response = fetch('https://api.github.com/users/ThalesAvila')
  const user = await (await response).json()

  return {
    props: {
      user
    },
    revalidate: 5
  }
}
