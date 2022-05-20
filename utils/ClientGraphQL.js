import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://fakeql.com/graphql/352c10a9e2d2caf057511b1d1e425fe4',
  cache: new InMemoryCache()
});

export default client
