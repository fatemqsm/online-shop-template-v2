import React, { useEffect, useState, useContext, useCallback, useReducer } from 'react'
import { useRouter } from 'next/router'
import { GET_ALL_PRODUCTS_ACTION } from '../../actions'
import { css, cx } from '@emotion/css'
import ProductInCart from '../../containers/ProductInCart/ProductInCart'
import { useDispatch, useSelector } from 'react-redux'
import Small from '../../components/Typography/Small'
import Button from '../../components/Button/Button'
import Navigation from '../../containers/Navigation/Navigation'
import Image from 'next/image'

const CartAlready = () => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const [loginMessage, setLoginMessage] = useState(null)
  const allStore = useSelector((state) => state)
  let router = useRouter()
  const carts = []
  allStore.cart.carts ? carts = allStore.cart.carts : []
  // console.log('carts in cart', carts)
  const [PRODUCTS, setPRODUCTS] = useState([])
  const dispatch = useDispatch()

  const totalPrice = 0
  // const fetchingProductUrl = useCallback(async () => {
  //   await dispatch(GET_ALL_PRODUCTS_ACTION())
  //   setPRODUCTS(allStore.allProducts.allProducts)
  // }, [])
  useEffect(() => {
    const fetchingProductUrl = async () => {
      await dispatch(GET_ALL_PRODUCTS_ACTION())
      setPRODUCTS(allStore.allProducts.allProducts)
    }
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
    (allStore.auth.logged === true && (allStore.auth.user)) ? (router.push('/paymentPage')) : setLoginMessage(true)
  }
  return (
    <>

      {
        allStore && allStore.allProducts && allStore.allProducts.loading === false ?
          (totalPrice === 0 ? (
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
                margin:150px auto;
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
          )) :
          <div className={css`
          display:flex; 
          justify-content: center;
          margin:100px 0; 
          `}>
            <Image src="/loading.svg" alt="loading" width={60} height={60} />

          </div>

      }

    </>
  )
}

export default CartAlready
