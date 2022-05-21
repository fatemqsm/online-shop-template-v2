import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { css, cx } from '@emotion/css'
import Navigation from '../Navigation/Navigation'
import BlogModal from './BlogModal.jsx'
// import { Space, H2 } from './../../components'
import Space from '../../components/Space/Space'
import H2 from '../../components/Typography/H2'

import Footer from './../Footer/Footer'
// import BREACKPOINT from './../../components/Styles/BREACKPOINT.json'
import client from '../../../utils/ClientGraphQL'
// import loading from '../../../public/loadign.svg'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from '@apollo/client'
const POSTS_QUERY = gql`
  {
    posts {
      id
      title
      date
      text
    }
  }
`
const BlogMainPage = () => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const { loading, error, data } = useQuery(POSTS_QUERY)
  console.log('debuging', data)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    data && data.posts && setPosts(data.posts)
  }, [data])
  return (
    <>
      <Navigation />

      <div
        className={css`
          width: 80%;
          margin: 0 auto;
          ${mq[1]} {
            width: 90%;
          }
        `}
      >
        <Space />
        <Space />
        <Space />
        <Space />
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          Blog
        </H2>
        <Space />
        {loading === false ? (
          posts.map((item) => <BlogModal key={`post-${item.id}`} data={item} />)
        ) : (
          <div
            className={css`
              margin-top: 100px;
              text-align: center;
            `}
          >
            <Image width={50} height={50} src="/loading.gif" alt="loading" />
          </div>
        )}
        <Space />
        <Footer />
      </div>
    </>
  )
}

export default BlogMainPage
