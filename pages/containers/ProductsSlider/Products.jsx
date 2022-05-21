import React from 'react'
import { css, cx } from '@emotion/css'
// import { Button, H5 } from './../../components'
import Button from '../../components/Button/Button'
import H5 from '../../components/Typography/H5'

import Image from 'next/image'
import styled from '@emotion/styled'
import QuickViewIcon from './QuickViewIcon'
import Link from 'next/link'

// const BottonWithDisplayNone = styled.div`
//   display: block;
// `
// const text = styled.div`
//   background-color: white;
//   text-align: center;
//   &:hover {
//     ${BottonWithDisplayNone} {
//       display: block;
//     }
//   }
// `

const Products = ({ data = {} }) => {
  return (
    <div
      className={css`
        width: 220px;
        height: 220px;
        position: relative;
        margin-bottom: 120px;
      `}
    >
      <div
        className={css`
          width: 220px;
          height: 220px;
          position: relative;
        `}
      >
        <Image loading="lazy" layout="fill" src={data.Picture} alt="product" />
      </div>

      <QuickViewIcon product={data} />
      <div
        className={css`
          width: 250px;
        `}
      ></div>
      {/* <text
        className={css`
          background-color: white;
          text-align: center;
        `}
      > */}
      <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
        {data.Name}
      </H5>
      <H5 lineHeight="1.5" fontFamily="font5" color="#0c1c6c">
        {data.Price}
      </H5>
      <Link href={`/Product/${data.Id}`}>
        {/* <BottonWithDisplayNone> */}
        <Button fontSize="15px">Discover now →</Button>
        {/* </BottonWithDisplayNone> */}
      </Link>
      {/* </text> */}
    </div>
  )
}

export default Products
