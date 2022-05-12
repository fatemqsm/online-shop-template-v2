import React from 'react'
import { css, cx } from '@emotion/css'

const InputText = ({
  onChange = () => {},
  type = 'text',
  placeholder = 'Enter your e-mail',
  width = '100%',
  id = '',
  margin = '0 10px',
}) => {
  return (
    <input
      onChange={onChange}
      id={id}
      type={type}
      placeholder={placeholder}
      className={css`
        font-family: font6;
        padding:15px 20px;
        width:${width}; 
        direction: ${type == 'text' ? `rtl` : 'ltr'}
        color: black;
        border:0.6px solid #e9e7e7;
        transition: all 400ms;
        &:focus {
          outline:  solid 1px #777;
          &::placeholder {
            color: white;
          }
        }
        &::placeholder {
          color: #777;
          font-size: 1.4em;
          font-family: font4;
        }
        margin:${margin};
      `}
    />
  )
}

export default InputText
