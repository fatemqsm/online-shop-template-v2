import React, { useEffect, useState } from 'react'
import BlogMainPage from './containers/Blog/BlogMainPage'
import client from '../utils/ClientGraphQL';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";
const Blog = () => {

  return (
    <ApolloProvider client={client}>
      <BlogMainPage />
    </ApolloProvider>
  )
}

export default Blog
