import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/link-error'
import { getDataFromTree } from '@apollo/react-ssr'
import withApollo from 'next-with-apollo'

function createClient({ headers, initialState }) {
  return new ApolloClient({
    uri: process.env.API_URL,
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors)
          graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
              `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
          )
        if (networkError)
          console.log(
            `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
          )
      })
    ]),
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            // TODO: Definir politicas de cache
          }
        }
      }
    }).restore(initialState || {})
  })
}

export default withApollo(createClient, { getDataFromTree })
