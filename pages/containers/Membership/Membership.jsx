import React from 'react'
import { css, cx } from '@emotion/css'
import InputText from '../../components/Input/InputText'
import H2 from '../../components/Typography/H2'
import H5 from '../../components/Typography/H5'
import Space from '../../components/Space/Space'
import Button from '../../components/Button/Button'
const Membership = () => {
  return (
    <div
      className={css`
        width: 70%;
        margin-left: 100px;
        text-align: center;
        margin: 0 auto;
      `}
    >
      <Space />
      <Space />
      <Space />
      <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
        Keep in Touch
      </H2>
      <Space />

      <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
        Sign up for our e-mail and be the first who know our special offers!
        Furthermore, we will give a 15% discount on the next order after you
        sign up.
      </H5>
      <Space />
      <div
        className={css`
          display: flex;
          text-align: center;
          align-items: center;
          align-content: center;
          align-self: center;
          flex-direction: row;
          justify-content: center;
        `}
      >
        <InputText />
        <Button
          backgroundColor="#0c1c6c"
          backgroundColorHover="#fbede7"
          color="white"
          colorHover="#0c1c6c"
        >
          Join Us
        </Button>
      </div>
      <Space />
      <Space />
      <Space />
    </div>
  )
}

export default Membership
