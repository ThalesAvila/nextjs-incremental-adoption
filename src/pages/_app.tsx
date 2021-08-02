import React from 'react'
// import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'

import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'
import withData from '@/lib/withData'

const MyApp = ({ Component, pageProps, apollo }) => {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default withData(MyApp)
