import React from 'react'
import { css } from '@emotion/css'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { LOGOUT_ACTION } from '../../../actions'

const DropDownMenu = ({ options }) => {
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
        width: 190px;
        font-family: font3;
        font-size: 14px;
        padding-left: 1em;
        background: #ffffff;
        border: 2px solid #e5e5e5;
        &:first-child {
          padding-top: 20px;
        }
        &:last-child {
          padding-bottom: 20px;
        }
      `}
    >
      {JSON.parse(options).map((item, index) => (
        <li key={`${item}-${index}}`}>
          <Link href={item.Link}>
            <div
              onClick={() => {
                item.Name === 'Log out' ? handleLogOut() : {}
              }}
              className={css`
                color: #0c1c6c;
                cursor: pointer;
              `}
            >
              {item.Name}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default DropDownMenu
