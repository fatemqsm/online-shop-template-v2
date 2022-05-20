import React, { useState, useEffect } from 'react'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_ACTION, GET_ALL_USERS_INFORMATION_ACTION } from '../actions'
import Navigation from './containers/Navigation/Navigation'
import { H2, H5, Small, Space, InputText, Button } from './components'
import BREACKPOINT from './components/Styles/BREACKPOINT.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Login = (props) => {

  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
  const dispatch = useDispatch()
  const [formValue, setFormValue] = useState({})
  const [logged, setLogged] = useState(false)
  const auth = useSelector((state) => state.auth)
  const allUsersInStates = useSelector((state) => state.allUsers)
  const router = useRouter()
  const handleOnChange = (name, value) => {

    setFormValue({
      ...formValue,
      [name]: value.target.value,
    })
    console.log("formValue", formValue)
  }

  const handleSubmitButton = async () => {
    dispatch(GET_ALL_USERS_INFORMATION_ACTION())
  }

  useEffect(() => {
    if (auth.loading === false && auth.user && auth.user.length > 0) {
      setLogged(false)
      const allUsers = allUsersInStates.user
      const user = formValue.email
      const currentUser = {}
      currentUser = allUsers?.find(item => item.email === user)
      currentUser && currentUser.password === formValue.password && setLogged(true)
    }
  }, [allUsersInStates.loading])

  useEffect(() => {
    if (logged === true && auth.loading === false) {
      dispatch(LOGIN_ACTION(formValue))
      router.push('/')
    }
  }
    , [logged])


  return (
    <>
      <div className={css`
          position: absolute;
          top: 0;
        `}>
        <Navigation />
      </div>
      <div
        className={css`
          background-color: #f7f8fa;
          padding: 10px 20px;
          margin:100px 100px 60px 100px; 
          ${mq[1]} {
            margin:100px 20px 60px 20px; 
          }
        `}
      >
        <Small lineHeight="1.5" fontFamily="font2" color="#777">
          Home / Log in
        </Small>
      </div>
      <div className={css`
            text-align: center;
        `}>
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          ALREADY REGISTERED?
        </H2>
      </div>
      <div className={css`
          display:flex;
          gap:20px; 
          justify-content: space-between;
          margin-top:40px; 
          padding:0 50px; 
          ${mq[1]} {
            flex-direction: column;
            padding:0 20px; 
          }
        `}>
        <div
          className={css`
          width:100%; 
          border : solid 1px #e9e7e7; 
          padding:10px; 
          ${mq[1]} {
            order:2; 
          }
        `}
        >
          <H5 lineHeight="4rem" fontFamily="font5" color="#0c1c6c">
            NEW CUSTOMER
          </H5>
          <Small color='rgba(25, 25, 25, 0.75)'>By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more.
          </Small>
          <Link href={`/Signup`}>
            <Button
              margin='40px 0'
              backgroundColor="#0c1c6c"
              backgroundColorHover="#fbede7"
              color="white"
              colorHover="#0c1c6c"
            >
              CREATE AN ACOUNT
            </Button>
          </Link>
        </div>
        <div
          className={css`
          width:100%; 
          border : solid 1px #e9e7e7; 
          padding:10px; 
          ${mq[1]} {
            order:1; 
          }
        `}
        >

          <H5 lineHeight="4rem" fontFamily="font5" color="#0c1c6c">
            LOG IN
          </H5>

          <Small color='rgba(25, 25, 25, 0.75)'>If you have an account with us, please log in.
          </Small>
          <div className={css`
            margin-top:45px; 
            `}>
            <H5 fontSize='1em' fontFamily="font4" color="#0c1c6c">
              E-MAIL *
            </H5>
            <InputText onChange={(value) => handleOnChange('email', value)} type='email' margin='10px 0' placeholder='Enter E-mail' />
          </div>
          <div className={css`
            margin-top:15px; 
          `}>
            <H5 fontSize='1em' fontFamily="font4" color="#0c1c6c">
              PASSWORD *
            </H5>
            <InputText onChange={(value) => handleOnChange('password', value)} type='password' margin='10px 0' placeholder='Enter Password' />
          </div>
          <Button
            onClick={() => { handleSubmitButton() }}
            type='submite'
            backgroundColor="#0c1c6c"
            backgroundColorHover="#fbede7"
            color="white"
            colorHover="#0c1c6c"
            loading={auth.loading}
            src='./loading-white.svg'
          >
            LOGIN
          </Button>
          {logged == false ? <Small color='red'>Incorrect username or password.
          </Small> : ''}

          <div className={css`
          text-align: right;
        `}>
            <Small color='rgba(25, 25, 25, 0.75)'>Lost your password?
            </Small></div>
        </div>
      </div>
      <Space />
    </>
  )
}

export default Login
