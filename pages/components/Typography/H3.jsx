import React from 'react'
import { css, cx } from '@emotion/css'

const H3 = ({ children, fontFamily = 'font3' }) => {
  return (
    <h3
      className={css`
        font-size: 1.953rem;
        font-family: ${fontFamily};
      `}
    >
      {children}
    </h3>
  )
}

export default H3
