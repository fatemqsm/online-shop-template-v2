import React from 'react'
import { css, cx } from '@emotion/css'

const H1 = ({
  children,
  fontFamily = 'font3',
  letterSpacing = '0px',
  color = 'black',
}) => {
  return (
    <h1
      className={css`
        font-size: 3.052em;
        font-family: ${fontFamily};
        letter-spacing: ${letterSpacing};
        color: ${color};
      `}
    >
      {children}
    </h1>
  )
}

export default H1
