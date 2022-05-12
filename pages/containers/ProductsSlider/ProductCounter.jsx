import React, { useState } from 'react'
import { css, cx } from '@emotion/css'
import { useRouter } from 'next/router'
import { useLocation } from 'react-router-dom'
import Navigation from '../containers/Navigation/Navigation'
import { Button, H2, H3, H5, Small, Space } from '../components'
import BREACKPOINT from './../components/styles/BREACKPOINT.json'

const ProductCounter = (props) => {
  const [counter, setCounter] = useState(0)
  return (
    <div
      className={css`
        position: absolute;
        top: 0;
      `}
    ></div>
  )
}

export default ProductCounter
