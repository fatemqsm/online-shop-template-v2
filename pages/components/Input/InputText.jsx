import React from 'react'
import { css, cx } from '@emotion/css'

const InputText = ({
  type = 'text',
  placeholder = 'Enter your e-mail',
  width = '360px',
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={css`
        font-family: font6;
        padding:15px 20px;
        width:${width}; 
        direction: ${type == 'text' ? `rtl` : 'ltr'}
        font-size: 25px;
        color: black;
        border:0.8px solid #777;
        transition: all 400ms;
        &:focus {
          outline:  solid 1px #777;
        }
        &::placeholder {
          color: #777;
          font-size: 1.3em;
          font-family: font4;
        }
        margin:0 20px;
      `}
    />
  )
}

export default InputText
