import React from 'react'
import { css, cx } from '@emotion/css'
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

const Button = ({
  width = '',
  type = 'submite',
  children,
  onClick = () => {},
  color = 'black',
  colorHover = 'white',
  position = 'static',
  bottom = '0',
  left = '0',
  margin = '0',
  fontSize = '1.2em',
  padding = '10px 37px',
  backgroundColor = 'white',
  backgroundColorHover = '#0c1c6c',
}) => {
  const theme = useTheme()
  return (
    <button
      type={type}
      onClick={onClick}
      className={css`
        width: ${width};
        font-family: font5;
        padding: ${padding};
        font-size: ${fontSize};
        color: ${color};
        font-weight: 400;
        background-color: ${backgroundColor};
        letter-spacing: 0;
        border: none;
        transition: all 400ms;
        &:hover {
          color: ${colorHover};
          background-color: ${backgroundColorHover};
        }
        bottom: ${bottom};
        position: ${position};
        left: ${left};
        margin: ${margin};
      `}
    >
      {children}
    </button>
  )
}

export default Button
