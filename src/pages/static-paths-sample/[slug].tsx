import React from 'react'
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

export interface repo {
  name: string
  // eslint-disable-next-line camelcase
  full_name: string
  // eslint-disable-next-line camelcase
  html_url: string
}

const StaticPathsSample: React.FC<{ repo: repo }> = ({ repo }) => {
  const router = useRouter()

  return (
    <>
      <Head>Static Paths Sample</Head>
      <main>
        <h1>Static Paths Sample</h1>
        {router.isFallback ? (
          <p>Carregando...</p>
        ) : (
          <h1>
            <Link href={repo.html_url}>{repo.name}</Link>
          </h1>
        )}
      </main>
    </>
  )
}

export default StaticPathsSample

export const getStaticPaths: GetStaticPaths = async () => {
  const response = fetch('https://api.github.com/orgs/nodejs/repos?per_page=20')
  const data = await (await response).json()

  const paths = data.map(repo => {
    return {
      params: {
        slug: repo.name
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const { slug } = context.params
  const response = fetch(`https://api.github.com/repos/nodejs/${slug}`)
  const repo = await (await response).json()

  return {
    props: {
      repo
    },
    revalidate: 5
  }
}
