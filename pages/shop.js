import React, { useEffect, useState, useContext, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_PRODUCTS_ACTION } from '../actions'
import { css } from '@emotion/css'
import Navigation from '../containers/Navigation/Navigation'
import Products from '../containers/ProductsSlider/Products'
import Small from '../components/Typography/Small'
import H2 from '../components/Typography/H2'
import Image from 'next/image'

const Shop = () => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const [productss, setProducts] = useState([])
  const dispatch = useDispatch()

  const allProducts = useSelector((state) => state.allProducts)
  const loadAllProducts = () => {
    dispatch(GET_ALL_PRODUCTS_ACTION())
  }
  useEffect(() => {
    loadAllProducts()
  }, [])
  useEffect(() => {
    setProducts(allProducts.allProducts)
  }, [allProducts])


  return (
    <>
      <div className={css`
          position: absolute;
          top: 0;
         
        `}><Navigation /></div>
      <div
        className={css`
          background-color: #f7f8fa;
          margin: 100px 60px;
          padding: 10px 20px;
          ${mq[1]} {
            margin: 100px 20px;
          }
        `}
      >
        <Small lineHeight="1.5" fontFamily="font2" color="#777">
          Home / Shop
        </Small>

      </div>
      <div className={css`
          margin:-50px 0 -50px 60px; 
          ${mq[1]} {
            margin-left:20px; 
          } 
        `}>
        <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
          Shop
        </H2>
      </div>

      <div className={css`
          display: grid;
          grid-template-columns: auto auto auto auto;
          justify-content: space-around;
          grid-gap:70px 10px; 
          margin:100px 0; 
          text-align:center; 
          justify-content: ${productss ? `auto` : 'center'};
          ${mq[2]} {
            grid-template-columns:auto auto auto;
            margin-top:100px;
          }
          ${mq[1]} {
            grid-template-columns: auto auto;
            margin-top:100px;
          }
          ${mq[0]} {
            grid-template-columns: auto;
            margin-top:100px;
          }
        `}>

        {(productss) ? productss.map((item) => <Products data={item} key={`product-${item.Id}`} />) : (

          <Image
            loading="lazy"
            src="/loading.svg"
            alt="loading"
            width={60}
            height={60}
          />
        )}
      </div>
    </>
  )
}

export default Shop
