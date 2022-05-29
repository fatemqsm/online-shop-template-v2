import React from 'react'
import { css, keyframes } from '@emotion/css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_ACTION } from './../../actions'

const DropDownMenuAnimation = keyframes`
  from{
    // transform: translateY(-100%);
    opacity: 0;
    max-height: 0px;
  }
  to {
    // transform: translateY(0);
    opacity: 1;
    max-height: 300px;

  }
`
const DropDownMenu = ({ options = '[]' }) => {
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(LOGOUT_ACTION())
  }
  return (
    <ul
      className={css`
        display: flex;
        flex-direction: column;
        gap: 15px 10px;
        font-weight: 300;
        min-width: 190px;
        max-width: 250px;
        font-family: font3;
        font-size: 14px;
        padding: 0 1em;
        background: #ffffff;
        border: 2px solid #e5e5e5;
        overflow: hidden;

        animation: ${DropDownMenuAnimation} 0.4s ease;
        &:first-child {
          padding-top: 20px;
        }
        &:last-child {
          padding-bottom: 20px;
        }
      `}
    >
      {JSON.parse(options).map((item, index) => (
        <li
          key={`${item}-${index}}`}
          className={css`
            overflow-wrap: break-word;
          `}
        >
          <Link href={item?.Link}>
            <div
              onClick={() => {
                item.Name === 'Log out' ? handleLogOut() : {}
              }}
              className={css`
                color: #0c1c6c;
                cursor: pointer;
                line-height: 1.1rem;
              `}
            >
              {item?.Name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DropDownMenu
