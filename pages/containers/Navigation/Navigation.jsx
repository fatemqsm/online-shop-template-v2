import React, { useEffect, useState } from 'react'
import { css, cx } from '@emotion/css'
import Logo from './../../components/Logo/Logo'
import { jsx, ThemeProvider, useTheme } from '@emotion/react'
import Link from 'next/link'
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from 'react-icons/hi'

const Navigation = ({ marginBottom = '0' }) => {
  const theme = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [navigationBackgroundColor, setNavigationBackgroundColor] =
    useState('transparent')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // if (scrollY>70px){
  //   setNavigationBackgroundColor('white')
  // } else {
  //   setNavigationBackgroundColor('transparent')
  // }
  // scrollY>70px?setNavigationBackgroundColor('white'):setNavigationBackgroundColor('transparent')

  return (
    <div
      className={css`
        position: fixed;
        width: 100%;
        z-index: 100;
        color: ${theme.colors.darkBlue};
        margin-bottom: ${marginBottom};
      `}
    >
      <div
        className={css`
          display: flex;
          flex-direction: row;
          color: ${theme.colors.darkBlue};
          font-weight: bold;
          justify-content: space-between;
          align-items: center;
          line-height: 0;
          padding: 20px;
          ${scrollY > 70
            ? `
              background-color: white;
              box-shadow: 0 0px 8px rgb(0 0 0 / 30%);
            `
            : `background-color: transparent;`}
        `}
      >
        <ul
          className={css`
            display: flex;
            flex-direction: row;
            text-decoration: none;
            align-items: center;
            gap: 10px 20px;
            font-family: font3;
            font-size: 16px;
          `}
        >
          <li
            className={css`
              text-transform: uppercase;
              line-height: 0;
              margin-top: -1px;
            `}
          >
            <Link href="/">
              <a
                className={css`
                  text-decoration: none;
                  &:active {
                    color: ${theme.colors.darkBlue};
                  }
                `}
              >
                <Logo />
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Shop">
              <a
                className={css`
                  text-decoration: none;
                  margin-left: 40px;
                  color: ${theme.colors.darkBlue};
                  &:active {
                    color: ${theme.colors.darkBlue};
                  }
                `}
              >
                Shop
              </a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a
                className={css`
                  text-decoration: none;
                  color: ${theme.colors.darkBlue};
                  &:active {
                    color: ${theme.colors.darkBlue};
                  }
                `}
              >
                About
              </a>
            </Link>
          </li>
          <li>
            <Link href="/Contact">
              <a
                className={css`
                  text-decoration: none;
                  color: ${theme.colors.darkBlue};
                  &:active {
                    color: ${theme.colors.darkBlue};
                  }
                `}
              >
                Contact
              </a>
            </Link>
          </li>
        </ul>

        <ul
          className={css`
            display: flex;
            flex-direction: row;
            gap: 10px 20px;
            font-size: 25px;
            font-weight: bolder;
          `}
        >
          <li>
            <HiOutlineSearch />
          </li>
          <li>
            <HiOutlineShoppingBag />
          </li>
          <li>
            <HiOutlineUser />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navigation
