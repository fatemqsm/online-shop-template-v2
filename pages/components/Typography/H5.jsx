import React from 'react'
import { css, cx } from '@emotion/css'

const H5 = ({
  children,
  color,
  fontFamily = 'font3',
  lineHeight = '1px',
  fontSize = '1.25rem',
}) => {
  return (
    <h5
      className={css`
        font-size: ${fontSize};
        color: ${color};
        font-family: ${fontFamily};
        line-height: ${lineHeight};
      `}
    >
      {children}
    </h5>
  )
}

export default H5
