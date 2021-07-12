import React from 'react'
import Head from 'next/head'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

export interface repo {
  name: string
}

const SSRSample: React.FC<{ repositories: Array<repo> }> = ({
  repositories
}) => {
  return (
    <>
      <Head>SSRSample</Head>
      <main>
        <h1>SSRSample</h1>
        <ul>
          {repositories.map(repo => {
            return (
              <li key={repo.name}>
                <Link href={`/static-paths-sample/${repo.name}`}>
                  {repo.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default SSRSample

export const getServerSideProps: GetServerSideProps = async () => {
  const response = fetch('https://api.github.com/orgs/nodejs/repos?per_page=20')
  const data = await (await response).json()

  return {
    props: {
      repositories: data
    }
  }
}
