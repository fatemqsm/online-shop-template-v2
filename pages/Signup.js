import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { REGISTER_ACTION, GET_ALL_USERS_INFORMATION_ACTION } from '../actions'
import { css } from '@emotion/css'
import Navigation from './containers/Navigation/Navigation'
// import { H2, H5, Small, Space, InputText, Button } from './components'
import H2 from './components/Typography/H2'
import H5 from './components/Typography/H5'
import Small from './components/Typography/Small'
import Space from './components/Space/Space'
import InputText from './components/Input/InputText'
import Button from './components/Button/Button'
// import BREACKPOINT from './components/Styles/BREACKPOINT.json'
import Link from 'next/link'

const Signup = (props) => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const auth = useSelector((state) => state.auth)
  const allUsersInStates = useSelector((state) => state.allUsers)
  const router = useRouter()
  const [formValue, setFormValue] = useState({})
  const [repetitiveUser, setRepetitiveUser] = useState(undefined)
  const dispatch = useDispatch()
  const handleOnChange = (name, value) => {
    setFormValue({
      ...formValue,
      [name]: value.target.value,
    })
    console.log("formValue", formValue)
  }
  const handleCreateAccountButton = (event) => {
    if (event) event.preventDefault()

    const allUsers = allUsersInStates.user
    const user = formValue.email
    const currentUser = []
    currentUser = allUsers?.filter(item => item.email === user)
    console.log('current user ', currentUser)
    console.log('current user1 ', repetitiveUser)
    currentUser.length > 0 ? setRepetitiveUser(true) : setRepetitiveUser(false)

    // postData({ url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/users', data: formValue })
  }
  useEffect(() => {
    auth.register === true && router.push('/Login')
  }, [auth.register])
  useEffect(() => {
    repetitiveUser === false && dispatch(REGISTER_ACTION(formValue))
  }, [repetitiveUser])
  useEffect(() => {
    dispatch(GET_ALL_USERS_INFORMATION_ACTION())
  }, [])
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
          Home / Sign up
        </Small>
      </div>
      <div className={css`
            text-align: center;
        `}>
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          CREATE AN ACCOUNT
        </H2>
      </div>
      <div className={css`
          display:flex;
          gap:20px; 
          justify-content: space-between;
          margin-top:70px; 
          padding:0 50px; 
          max-width:700px; 
          margin: 0 auto;
          ${mq[1]} {
            padding:0 20px; 
          }
        `}>
        <div
          className={css`
          width:100%; 
          border : solid 1px #e9e7e7; 
          padding:10px; 
          
        `}
        >

          <H5 lineHeight="4rem" fontFamily="font5" color="#0c1c6c">
            PERSONAL INFORMATION
          </H5>

          <div className={css`
          margin-top:45px; 
          `}>
            <H5 fontSize='1em' fontFamily="font4" color="#0c1c6c">
              First Name *
            </H5>
            <InputText onChange={(value) => handleOnChange('firstName', value)} type='name' margin='10px 0' placeholder='Enter First Name' />
          </div>

          <div className={css`
          margin-top:15px; 
          `}>
            <H5 fontSize='1em' fontFamily="font4" color="#0c1c6c">
              Last Name *
            </H5>
            <InputText onChange={(value) => handleOnChange('lastName', value)} type='name' margin='10px 0' placeholder='Enter Last Name' />
          </div>

          <div className={css`
          margin-top:15px; 
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

          <div className={css`
          margin-top:15px; 
        `}>
            <H5 fontSize='1em' fontFamily="font4" color="#0c1c6c">
              Address *
            </H5>
            <InputText onChange={(value) => handleOnChange('address', value)} type='text' margin='10px 0' placeholder='Enter Address' />
          </div>
          {/* <Link href={auth.register === true ? `/Login` : '/Signup'}> */}
          <Button
            onClick={() => { handleCreateAccountButton(event) }}
            backgroundColor="#0c1c6c"
            backgroundColorHover="#fbede7"
            color="white"
            colorHover="#0c1c6c"
            src='/loading-white.svg'
            loading={auth.loading}

          >
            CREATE
          </Button>
          {repetitiveUser == true ? <Small color='red'>You are already registered.
          </Small> : ''}

          <div className={css`
          text-align: right;
 
        `}>

            <Link href={`/Login`}>
              <div className={css`
                      color: rgba(25, 25, 25, 0.75);
                      cursor:pointer; 
                    `} >Do have an account?
              </div>
            </Link></div>
        </div>

      </div>

      <Space />
    </>
  )
}

export default Signup
