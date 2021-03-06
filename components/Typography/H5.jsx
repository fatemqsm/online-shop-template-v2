import React from 'react'
import { css, cx } from '@emotion/css'
// import BREACKPOINT from '../styles/BREACKPOINT.json'
const H5 = ({
  children,
  color,
  fontFamily = 'font3',
  lineHeight = '1.5rem',
  fontSize = '1.25em',
}) => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <h5
      className={css`
        font-size: ${fontSize};
        color: ${color};
        font-family: ${fontFamily};
        line-height: ${lineHeight};
        ${mq[1]} {
          font-size: 1.1em;
        }
      `}
    >
      {children}
    </h5>
  )
}

export default H5
