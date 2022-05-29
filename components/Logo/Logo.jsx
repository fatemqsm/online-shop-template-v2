import React from 'react'
import { css, cx } from '@emotion/css'
import H4 from './../Typography/H4'

const Logo = () => {
  return (
    <H4
      color="#0c1c6c"
      fontFamily="font5"
      className={css`
        display: flex;
        letter-spacing: 5em;
       
        }
      `}
    >
      online shop
    </H4>
  )
}

export default Logo
