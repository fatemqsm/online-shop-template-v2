import { gql } from '@apollo/client'

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
export default POSTS_QUERY
