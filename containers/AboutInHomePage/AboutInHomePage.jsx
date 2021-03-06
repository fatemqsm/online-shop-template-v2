import React from 'react'
import { css, cx } from '@emotion/css'
// import { Button, Space, H5, H2 } from '../../components'
import Space from '../../components/Space/Space'
import H5 from '../../components/Typography/H5'
import H2 from '../../components/Typography/H2'

// import BREACKPOINT from './../../components/styles/BREACKPOINT.json'

const AboutInHomePage = () => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <div
      className={css`
        width: 55%;
        margin-left: 100px;
        ${mq[1]} {
          width: 80%;
          margin-left: 40px;
        }
      `}
    >
      <Space />
      <Space />
      <Space />
      <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
        About
      </H2>
      <Space />

      <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
        A great about us block helps builds trust between you and your
        customers. The more content you provide about you and your business, the
        more confident people will be when purchasing from your store.
      </H5>
      <Space />
    </div>
  )
}

export default AboutInHomePage
