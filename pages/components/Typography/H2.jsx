import React from 'react'
import { css, cx } from '@emotion/css'

const H2 = ({
  children,
  fontFamily = 'font3',
  letterSpacing = '0px',
  color = 'black',
}) => {
  return (
    <h2
      className={css`
        font-size: 2.441rem;
        font-family: ${fontFamily};
        letter-spacing: ${letterSpacing};
        color: ${color};
      `}
    >
      {children}
    </h2>
  )
}

export default H2
