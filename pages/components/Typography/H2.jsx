import React from 'react'
import { css, cx } from '@emotion/css'
import BREACKPOINT from '../styles/BREACKPOINT.json'

const H2 = ({
  children,
  fontFamily = 'font3',
  letterSpacing = '0px',
  color = 'black',
}) => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <h2
      className={css`
        font-size: 2.441em;
        font-family: ${fontFamily};
        letter-spacing: ${letterSpacing};
        color: ${color};
        ${mq[1]} {
          font-size: 2.1em;
        }
      `}
    >
      {children}
    </h2>
  )
}

export default H2
