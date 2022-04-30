import React from 'react'
import { css, cx } from '@emotion/css'

const H4 = ({ children, fontFamily = 'font3', color = '#0c1c6c' }) => {
  return (
    <h4
      className={css`
        font-size: 1.563rem;
        font-family: ${fontFamily};
        color: ${color};
      `}
    >
      {children}
    </h4>
  )
}

export default H4
