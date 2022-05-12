import React, { useEffect, useState, useContext, useCallback } from 'react'
import { css, cx } from '@emotion/css'
import BREACKPOINT from './components/Styles/BREACKPOINT.json'
import { useRouter } from 'next/router'

import CartContext from '../contexts/CartContext'
import ProductInCart from './containers/ProductInCart/ProductInCart'
import { useDispatch, useSelector } from 'react-redux'
import { Space, Small, Button } from './components'
import Navigation from './containers/Navigation/Navigation'
const PaymentPage = () => {
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)
  const { dispatchCart } = useContext(CartContext)
  let router = useRouter()

  const [PRODUCTS, setPRODUCTS] = useState([])
  const { carts } = useContext(CartContext)
  const auth = useSelector((state) => state)
  const totalPrice = 0
  const fetchingProductUrl = async () => {
    try {
      const response = await fetch(
        'https://62711f28e1c7aec428fc31ae.mockapi.io/allproducts'
      )
      const resault = await response.json()
      setPRODUCTS(resault)
    } catch (e) {
      console.log('error in fetchingProductUrl ', e)
    }
  }
  useEffect(() => {
    fetchingProductUrl()
  }, [])


  const calculatePrice = () => {
    const price = 0
    PRODUCTS.map((item) => (
      price = item.Price,
      carts.includes(item.Id) && (totalPrice = totalPrice + JSON.parse(price.slice(1, price.lenght)))
    ))
  }
  calculatePrice()

  const handelProceedToCheckout = () => {
    const ProceedToCheckout = {
      user: auth.auth.user,
      carts: carts,
      price: totalPrice,
    }
    console.log('ProceedToCheckout', ProceedToCheckout)
    async function postData(url = 'https://62711f28e1c7aec428fc31ae.mockapi.io/cart', data = {}) {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(ProceedToCheckout)
      });
      return response.json();
    }

    try {
      postData('https://62711f28e1c7aec428fc31ae.mockapi.io/cart', { answer: 42 })
        .then(data => {
          console.log("data", data);
        });
    } catch (e) {
      console.log("error in postData", e);
    }

    dispatchCart({
      type: 'PAYMENT',
    })

    router.push('/Cart')
  }
  return (
    <div className={css`
          text-align:center; 
        `}>
      <Button
        backgroundColor="#0c1c6c"
        backgroundColorHover="#fbede7"
        color="white"
        colorHover="#0c1c6c"
        fontSize='0.8em'
        margin='100px 0'
        onClick={() => handelProceedToCheckout()}>PAYMENT</Button>
    </div>


  )
}

export default PaymentPage
