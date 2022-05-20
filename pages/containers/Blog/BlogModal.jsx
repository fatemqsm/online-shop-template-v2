import React from 'react'
import { css, cx } from '@emotion/css'
import { Space, H2, H5, H3, H4, Small } from '../../components'
import BREACKPOINT from '../../components/Styles/BREACKPOINT.json'

const BlogModal = ({ data }) => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <div
      className={css`
        padding: 20px 50px;
        border: solid 1px #e9e7e7;
        margin-bottom: 10px;
        ${mq[1]} {
          padding: 20px 20px;
        }
      `}
    >
      <H5 fontFamily="font4" color="#0c1c6c">
        {data.title}
      </H5>
      <Space />
      <Small lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
        CREATED ON : {data.date}
      </Small>
      <Small lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
        {data.text}
      </Small>
    </div>
  )
}

export default BlogModal
