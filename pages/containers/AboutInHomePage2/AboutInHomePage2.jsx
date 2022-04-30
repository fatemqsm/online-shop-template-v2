import React from 'react'
import { css, cx } from '@emotion/css'
import { Button, H5, H2, Space } from '../../components'

const AboutInHomePage2 = () => {
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
        `}
      >
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          It is made in Japan
        </H2>
        <Space />

        <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
          WOKIEE Shopify Theme is more than usual theme. It is a powerful design
          tool. WOKIEE is outstanding Premium Shopify theme. It will be perfect
          solution for your current or future webshop.
        </H5>
        <Space />
        <Button>Read more about us →</Button>
        <Space />
        <Space />
        <Space />
        <Space />
        <Space />
      </div>
    </div>
  )
}

export default AboutInHomePage2
