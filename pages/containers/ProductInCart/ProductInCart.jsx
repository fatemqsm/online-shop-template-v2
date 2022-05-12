import React, { useEffect, useState, useContext, useCallback } from 'react'
import { css, cx } from '@emotion/css'
import BREACKPOINT from './../../components/Styles/BREACKPOINT.json'
import { Space, Small } from '../../components'
const ProductInCart = ({ data }) => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
  return (
    <>
      <ul
        className={css`
          display: flex;
          align-items: center;
          justify-content: space-around;
          padding: 20px 60px;
          width: 100%;
          &:not(:last-child) {
            border-bottom: 0.5px solid gray;
          }
          ${mq[1]} {
            flex-direction: column;
            padding: 20px;
          }
        `}
      >
        <li
          className={css`
            ${mq[1]} {
              order: 2;
            }
          `}
        >
          <Small fontFamily="font6 " fontSize="1.1rem">
            {data.Name}
          </Small>
          <Small>{data.Price}</Small>
        </li>
        <li
          className={css`
            ${mq[1]} {
              order: 1;
            }
          `}
        >
          <img
            src={data.Picture}
            className={css`
              max-width: 150px;
              ${mq[1]} {
                order: 1;
              }
            `}
          />
        </li>
      </ul>
    </>
  )
}

export default ProductInCart
