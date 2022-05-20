import React from 'react'
import { css, cx } from '@emotion/css'
import { jsx, ThemeProvider, useTheme } from '@emotion/react'

const Button = ({
  loading = false,
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
  src = './loading.svg',
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
      {loading === true ? (
        <img
          className={css`
            width: 20px;
          `}
          // src="./loading.svg"
          src={src}
          alt=""
        />
      ) : (
        children
      )}
      {/* <img
        className={css`
          width: 100px;
        `}
        src="./loading.svg"
        alt=""
      /> */}
    </button>
  )
}

export default Button
