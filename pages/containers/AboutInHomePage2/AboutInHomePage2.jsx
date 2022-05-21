import React from 'react'
import { css, cx } from '@emotion/css'
// import { Button, H5, H2, Space } from '../../components'
import Button from '../../components/Button/Button'
import H5 from '../../components/Typography/H5'
import Space from '../../components/Space/Space'
import H2 from '../../components/Typography/H2'

import BREACKPOINT from './../../components/styles/BREACKPOINT.json'

const AboutInHomePage2 = () => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <div
      className={css`
        background-image: url('./images/backgrounAboutInHomePage.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        width: 100%;
        background-size: cover;
      `}
    >
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
        <Space />
        <Space />
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          It is made in Iran
        </H2>
        <Space />

        <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
          ONLINE SHOP Theme is more than usual theme. It is a powerful design
          tool. ONLINE SHOP is outstanding Premium Shopify theme. It will be
          perfect solution for your current or future webshop.
        </H5>
        <Space />
        <Button>Read more about us →</Button>
        <Space />
        <Space />
        <Space />
        <Space />
      </div>
    </div>
  )
}

export default AboutInHomePage2
