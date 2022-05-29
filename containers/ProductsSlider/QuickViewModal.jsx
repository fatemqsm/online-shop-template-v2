import React from 'react'
import { css, cx } from '@emotion/css'

const QuickViewModal = ({
  children,
  fontFamily = 'font3',
  letterSpacing = '0px',
  color = 'black',
}) => {
  return (
    <h1
      className={css`
        font-size: 3.052rem;
        font-family: ${fontFamily};
        letter-spacing: ${letterSpacing};
        color: ${color};
      `}
    >
      {children}
    </h1>
  )
}

export default QuickViewModal
