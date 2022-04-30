import React from 'react'
import { css, cx } from '@emotion/css'
import { Space } from '../../components'
import { BsInstagram, BsTwitter, BsPinterest } from 'react-icons/bs'

const Footer = () => {
  return (
    <div
      className={css`
        color: #0c1c6c;
        font-family: font5;
        font-size: 35px;
        width: 300px;
        margin: 0 auto;
        text-align: center;
        transition: all 400ms;
      `}
    >
      <Space />
      <Space />

      <ul
        className={css`
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: space-between;
        `}
      >
        <li
          className={css`
            &:hover {
              color: #191919;
            }
          `}
        >
          <BsInstagram />
        </li>
        <li
          className={css`
            &:hover {
              color: #191919;
            }
          `}
        >
          <BsTwitter />
        </li>
        <li
          className={css`
            &:hover {
              color: #191919;
            }
          `}
        >
          <BsPinterest />
        </li>
      </ul>
      <Space />
      <Space />
      <h6
        className={css`
          font-size: 15px;
          color: #777;
          font-family: font4;
        `}
      >
        copyright©2022. All rights reserved
      </h6>
      <Space />
    </div>
  )
}

export default Footer
