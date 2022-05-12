import React, { useEffect, useState, useContext } from 'react'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import CartContext from '../../../contexts/CartContext'
import { Logo, Small } from '../../components'
import { useTheme } from '@emotion/react'
import Link from 'next/link'
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from 'react-icons/hi'
import BREACKPOINT from './../../components/styles/BREACKPOINT.json'
import DropDownMenu from './DropDownMenu'

const Navigation = ({ marginBottom = '0' }) => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
  const theme = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isOpenAccount, setIsOpenAccount] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const auth = useSelector((state) => state.auth)
  console.log('auth in navigation', auth)
  const optionForDropDownListAccount = JSON.stringify([
    { Link: '/', Name: auth.user },
    { Link: '', Name: 'Log out' },
  ])
  const { carts } = useContext(CartContext)
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

  const clickOnNavbarButton = () => {
    setNavbarOpen((prev) => !prev)
    setIsOpenCart(false)
    setIsOpenAccount(false)
  }

  const togglingAccount = () => {
    setIsOpenCart(false)
    setIsOpenAccount(!isOpenAccount)
    setNavbarOpen(false)
  }
  const togglingCart = () => {
    setIsOpenCart(!isOpenCart)
    setIsOpenAccount(false)
    setNavbarOpen(false)
  }

  return (
    <>
      <div
        className={css`
          display: none;
          width: 100%;
          height: 100%;
          position: fixed;
          background-color: rgba(25, 25, 25, 0.4);
          z-index: -100;
          ${mq[1]} {
            display: ${navbarOpen ? `block` : 'none'};
            z-index: ${navbarOpen ? `50` : '-100'};
          }
        `}
      ></div>
      <div
        className={css`
          position: fixed;
          width: 100%;
          z-index: 100;
          margin-bottom: ${marginBottom};
          ${mq[1]} {
            display: inline-block;
            height: 80px;
            ${scrollY > 70
              ? `
            background-color: white;
            box-shadow: 0 0px 8px rgb(0 0 0 / 30%);
          `
              : `background-color: transparent;`}
          }
        `}
      >
        <div
          className={css`
            display: none;
            ${mq[1]} {
              display: block;
            }
          `}
        >
          <button
            className={css`
              background-color: ${theme.colors.white};
              color: ${theme.colors.darkGray};
              position: absolute;
              height: 3.3rem;
              width: 3.3rem;
              top: 0.8rem;
              left: 1.5rem;
              border-radius: 50%;
              z-index: 200;
              box-shadow: 0px 0px 10px 2px rgba(25, 25, 25, 0.2);
              cursor: pointer;
              border: none;
              font-size: 30px;
              transition: all 200ms;
              &:hover {
                font-size: 38px;
              }
            `}
            onClick={clickOnNavbarButton}
          >
            {navbarOpen ? <span>&#215;</span> : <span>&#8801;</span>}
          </button>
        </div>

        <div
          className={css`
            display: flex;
            justify-content: space-between;
            align-items: center;

            line-height: 0;
            color: ${theme.colors.darkBlue};
            ${scrollY > 70
              ? `
            background-color: white;
            box-shadow: 0 0px 8px rgb(0 0 0 / 30%);
          `
              : `background-color: transparent;`}
            ${mq[1]} {
              background-color: transparent;
            }
          `}
        >
          <div
            className={css`
              display: flex;
              font-weight: bold;
              padding: 20px;

              ${mq[1]} {
                display: ${!navbarOpen ? `none` : 'flex'};
                position: relative;
                flex-direction: column;
                background-color: ${theme.colors.white};
                width: 80%;
                height: 100vh;
              }
            `}
          >
            <ul
              className={css`
                display: flex;
                flex-direction: row;
                text-decoration: none;
                align-items: center;
                gap: 0 30px;
                font-family: font3;
                font-size: 16px;
                ${mq[1]} {
                  position: absolute;
                  flex-direction: column;
                  align-items: flex-start;
                  gap: 40px 0;
                  left: 30px;
                  top: 160px;
                }
              `}
            >
              <li
                className={css`
                  text-transform: uppercase;
                  line-height: 0;
                  margin-top: -1px;
                  padding-right: 40px;
                `}
              >
                <Link href="/">
                  <div
                    className={css`
                    cursor: pointer;

                  margin-top:-1px; 
                  }
                `}
                  >
                    <Logo />
                  </div>
                </Link>
              </li>

              <li>
                <Link href="/Shop">
                  <div
                    className={css`
                      cursor: pointer;

                      color: ${theme.colors.darkBlue};
                    `}
                  >
                    Shop
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/About">
                  <div
                    className={css`
                      cursor: pointer;

                      color: ${theme.colors.darkBlue};
                    `}
                  >
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/Contact">
                  <div
                    className={css`
                      color: ${theme.colors.darkBlue};
                      cursor: pointer;
                    `}
                  >
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div
            className={css`
              ${mq[1]} {
                position: absolute;
                top: 1.9rem;
                right: 1.5rem;
                font-size: 32px;
              }
            `}
          >
            <ul
              className={css`
                display: flex;
                flex-direction: row;
                gap: 0px 20px;
                font-size: 25px;
                font-weight: bolder;
                padding: 0 20px;
                margin-top: 25px;
                ${mq[1]} {
                  margin-top: -3px;
                }
                ${mq[0]} {
                  margin-top: 4px;
                }
              `}
            >
              <li
                className={css`
                  cursor: pointer;
                  ${mq[1]} {
                    display: none;
                  }
                `}
              >
                <HiOutlineSearch />
              </li>
              <li
                className={css`
                  cursor: pointer;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    margin-right: 10px;
                    ${mq[0]} {
                      margin-right: 5px;
                    }
                  `}
                >
                  <tooltip title="Cart">
                    <div onClick={() => togglingCart()}>
                      <HiOutlineShoppingBag />
                      <div
                        className={css`
                          position: relative;
                          width: 25px;
                          height: 25px;
                          top: -35px;
                          right: -20px;
                          text-align: center;
                          color: white;
                          background-color: ${theme.colors.darkBlue};
                          border-radius: 50%;
                          ${mq[0]} {
                            top: -30px;
                            right: -15px;
                          }
                        `}
                      >
                        <Small>{carts.length}</Small>
                      </div>
                    </div>
                  </tooltip>
                </div>
              </li>
              <li
                className={css`
                  cursor: pointer;
                `}
              >
                <tooltip title="My Account">
                  <div onClick={() => togglingAccount()}>
                    <HiOutlineUser />
                  </div>
                </tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {isOpenAccount === true && (
        <div
          className={css`
            display: block;
            position: fixed;
            top: 3.5rem;
            right: 20px;
            z-index: 250;
            ${mq[1]} {
              right: 45px;
            }
          `}
        >
          {auth.logged === true ? (
            <DropDownMenu options={optionForDropDownListAccount} />
          ) : (
            <DropDownMenu options='[{"Link":"/Login","Name":"Log in"},{"Link":"/Signup","Name":"Sign up"}]' />
          )}
        </div>
      )}
      {isOpenCart === true && (
        <div
          className={css`
            display: block;
            position: fixed;
            top: 3.5rem;
            right: 65px;
            z-index: 250;
            ${mq[1]} {
              right: 82px;
            }
          `}
        >
          <DropDownMenu options='[{"Link":"/Cart","Name":"View cart"}]' />
        </div>
      )}
    </>
  )
}

export default Navigation
