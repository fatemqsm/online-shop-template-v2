import React from 'react'
import { css, cx } from '@emotion/css'

const Small = ({
  children,
  color,
  fontFamily = 'font3',
  lineHeight = '1.5rem',
  fontSize = '0.9rem',
  paddingTop = '0',
}) => {
  return (
    <h6
      className={css`
        font-size: ${fontSize};
        color: ${color};
        font-family: ${fontFamily};
        line-height: ${lineHeight};
        padding-top: ${paddingTop};
      `}
    >
      {children}
    </h6>
  )
}

export default Small
