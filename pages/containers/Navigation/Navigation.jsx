import React, { useEffect, useState, useContext, useRef } from 'react'
// import { jsx, css, keyframes } from '@emotion/react'
import { css, keyframes } from '@emotion/css'
import { jsx } from '@emotion/react'

import { useDispatch, useSelector } from 'react-redux'
import CartContext from '../../../contexts/CartContext'
// import { Logo, Small } from '../../components'
import Logo from '../../components/Logo/Logo'
import Small from '../../components/Typography/Small'

import { useTheme } from '@emotion/react'
import Link from 'next/link'
import {
  HiOutlineUser,
  HiOutlineSearch,
  HiOutlineShoppingBag,
} from 'react-icons/hi'
import { GET_ALL_USERS_INFORMATION_ACTION } from '../../../actions'
// import BREACKPOINT from './../../components/styles/BREACKPOINT.json'
import DropDownMenu from './DropDownMenu'

const navBarAnimation = keyframes`
  from{
    margin-left:-300px; 
  }

  to {
    margin-left:0; 
  }
`

// function useOutsideAlerter(ref) {}
const Navigation = ({ marginBottom = '0' }) => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  // const wrapperRef = useRef(null)

  const dispatch = useDispatch()
  const theme = useTheme()
  const [scrollY, setScrollY] = useState(0)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isOpenAccount, setIsOpenAccount] = useState(false)
  const [isOpenCart, setIsOpenCart] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const auth = useSelector((state) => state.auth)
  const allStore = useSelector((state) => state)
  // console.log('allStore in navigation', allStore)

  const optionForDropDownListAccount = JSON.stringify([
    { Link: '/', Name: auth.user },
    { Link: '', Name: 'Log out' },
  ])

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
  // useEffect(
  //   (wrapperRef) => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //         setIsOpenAccount(false)
  //       }
  //     }

  //     // Bind the event listener
  //     document.addEventListener('mousedown', handleClickOutside)
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener('mousedown', handleClickOutside)
  //     }
  //   },
  //   [wrapperRef]
  // )
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
          z-index: 250;
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
                width: 65%;
                height: 100vh;
                animation: ${navBarAnimation} 0.4s ease;
                padding: 10px;
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
justify-content:center; 
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
              <li>
                <Link href="/Blog">
                  <div
                    className={css`
                      color: ${theme.colors.darkBlue};
                      cursor: pointer;
                    `}
                  >
                    Blog
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
                margin-top: 35px;
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
                  css={{
                    color: 'darkorchid',
                    '& .name': {
                      color: 'orange',
                      display: 'none',
                    },
                  }}
                >
                  <div onClick={() => togglingCart()}>
                    <p>
                      <HiOutlineShoppingBag />
                    </p>

                    <div
                      className={css`
                        position: relative;
                        top: -49px;
                        right: -20px;
                        text-align: center;
                        color: white;
                        background-color: ${theme.colors.darkBlue};
                        border-radius: 50%;
                        padding: 0 2px;
                        ${mq[0]} {
                          right: -15px;
                          padding: 0 8px;
                        }
                      `}
                    >
                      <Small>
                        {allStore.cart.carts ? allStore.cart.carts.length : 0}
                      </Small>
                    </div>
                  </div>
                </div>
              </li>
              <li
                className={css`
                  cursor: pointer;
                `}
              >
                <div onClick={() => togglingAccount()}>
                  <p>
                    <HiOutlineUser />
                  </p>
                </div>
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
            top: 4rem;
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
            <DropDownMenu
              options='[{"Link":"/Login","Name":"Log in"},{"Link":"/Signup","Name":"Sign up"}]'
              // ref={wrapperRef}
            />
          )}
        </div>
      )}
      {isOpenCart === true && (
        <div
          className={css`
            display: block;
            position: fixed;
            top: 4rem;
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

      {/* <div className="name">hi</div> */}
    </>
  )
}

export default Navigation
