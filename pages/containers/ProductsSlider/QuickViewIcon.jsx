import React from 'react'
import { css, cx } from '@emotion/css'
import { H5 } from './../../components'
import { BsEye } from 'react-icons/bs'

const QuickViewIcon = () => {
  return (
    <div>
      <div
        className={css`
          position: absolute;
          top: 15px;
          right: 15px;
          padding: 7px;
          border-radius: 100px;
          background-color: white;
          width: 38px;
          height: 38px;
          color: #0c1c6c;
          transition: all 400ms;
          text-align: center;

          &:hover {
            background-color: #0c1c6c;
            color: white;
            .tooltiptext {
              display: block;
              opacity: 1;
            }
          }
        `}
      >
        <H5 lineHeight="1.5" fontFamily="font3" fontSize="1.1rem">
          <BsEye />
        </H5>
      </div>
      <div
        className={css`
          position: absolute;
          top: 15px;
          right: 25px;
          background-color: white;
          display: none;
          opacity: 0;
        `}
      >
        <span className="tooltiptext">Quick View</span>
      </div>
    </div>
  )
}

export default QuickViewIcon
