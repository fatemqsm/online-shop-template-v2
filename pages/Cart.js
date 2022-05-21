import React, { useEffect, useState, useContext, useCallback, useReducer } from 'react'
import { useRouter } from 'next/router'
import ProductItemReducer from './../pages/Product/ProductItem.reducer'
import { GET_ALL_PRODUCTS_ACTION } from '../actions'

import { css, cx } from '@emotion/css'
import BREACKPOINT from './components/Styles/BREACKPOINT.json'
import CartContext from '../contexts/CartContext'
import ProductInCart from './containers/ProductInCart/ProductInCart'
import { useDispatch, useSelector } from 'react-redux'
import Small from './components/Typography/Small'
import Button from './components/Button/Button'
import Navigation from './containers/Navigation/Navigation'
const Cart = () => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
  const [loginMessage, setLoginMessage] = useState(false)
  const allStore = useSelector((state) => state)
  let router = useRouter()
  const carts = []
  allStore.cart.carts ? carts = allStore.cart.carts : []
  // console.log('carts in cart', carts)
  const [PRODUCTS, setPRODUCTS] = useState([])
  const dispatch = useDispatch()

  const totalPrice = 0
  const fetchingProductUrl = async () => {
    // allStore.allProducts === [] ? setPRODUCTS(allStore.allProducts.allProducts) : dispatch(GET_ALL_PRODUCTS_ACTION()) && setPRODUCTS(allStore.allProducts.allProducts)

    await dispatch(GET_ALL_PRODUCTS_ACTION())
    setPRODUCTS(allStore.allProducts.allProducts)

    // console.log('PRODUCTS', allStore.allProducts.allProducts)
    // try {
    //   const response = await fetch(
    //     'https://62711f28e1c7aec428fc31ae.mockapi.io/allproducts'
    //   )
    //   const resault = await response.json()
    //   setPRODUCTS(resault)
    // } catch (e) {
    //   console.log('error in fetchingProductUrl ', e)
    // }
  }
  useEffect(() => {
    fetchingProductUrl()
  }, [])


  const calculatePrice = () => {

    const price = 0
    PRODUCTS ? PRODUCTS.map((item) => (
      price = item.Price,
      carts.includes(item.Id) && (totalPrice = totalPrice + JSON.parse(price.slice(1, price.lenght)))
    )) : setPRODUCTS(allStore.allProducts.allProducts)
  }
  calculatePrice()
  // console.log('auth', allStore)

  const handelProceedToCheckout = () => {
    (allStore.auth.logged === true && (allStore.auth.user)) ? (router.push('/PaymentPage')) : setLoginMessage(true)
  }
  return (
    <>
      <div className={css`
        position :absolute; 
        top:0; 
      `}>
        <Navigation />
      </div>
      {totalPrice === 0 ? (
        <div className={css`
        margin:150px 0; 
        text-align:center; 
      `}>
          <Small fontFamily="font6 " fontSize="1.1rem">
            your cart is empty
          </Small>
        </div>
      ) : (

        <div className={css`
              position: absolute;
              top: 0;
              display:flex; 
              justify-content: space-around;
              margin:100px auto;
              gap:20px; 
              width:100%; 
              padding:20px; 
            ${mq[0]} {
              flex-direction: column;
            }
            `}>
          <div className={css`
                    border-radius: 4px;
                    border: 0.5px solid gray;
                    order:2; 
                    align-self:stretch; 
                    width:100%; 
                  ${mq[0]} {
                    order:1; 
                    align-content: center; 
                    width:100%; 
                  }
                `}>
            {
              PRODUCTS.map((item) => (
                carts.includes(item.Id) && (<ProductInCart data={item} />)
              ))
            }

          </div>
          <div className={css`
              border-radius: 4px;
              border: 0.5px solid gray;
              display:flex; 
              order:1;
              padding: 40px 20px;
              align-self:stretch; 
              width:100%; 
              max-width:300px; 
              display:flex; 
              flex-direction: column;
              ${mq[0]} {
                flex-direction:column;
                order:2; 
                padding: 20px ;
                max-width:600px;
              }
              `}>
            <Small fontFamily="font6 " fontSize="1.1rem">
              {`total price: ${totalPrice}`}
            </Small>
            <Button
              backgroundColor="#0c1c6c"
              backgroundColorHover="#fbede7"
              color="white"
              colorHover="#0c1c6c"
              fontSize='0.8em'
              margin='20px 0'
              onClick={() => handelProceedToCheckout()}>PROCEED TO CHECKOUT</Button>
            {loginMessage && <Small fontFamily="font6 " fontSize="1.1rem" color="red">
              To register an order, log in first
            </Small>}
          </div>
        </div>
      )}

    </>
  )
}

export default Cart
