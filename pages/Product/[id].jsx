import React from 'react'
import { css, cx } from '@emotion/css'
import { useRouter } from 'next/router'
import PRODUCTS from '../containers/ProductsSlider/PRODUCTS.json'
import Navigation from '../containers/Navigation/Navigation'
import { H2, H3, H5, Small, Space } from '../components'

const SingleProduct = (props) => {
  const router = useRouter()
  const pathName = router.asPath
  const productId = pathName.slice(9, 45)
  console.log('props', productId)
  const product = PRODUCTS.find((item) => item.Id === productId)
  return (
    <div>
      <div
        className={css`
          position: absolute;
          top: 0;
        `}
      >
        <Navigation />
      </div>
      <div
        className={css`
          background-color: #f7f8fa;
          margin: 100px 60px;
          padding: 10px 20px;
        `}
      >
        <Small lineHeight="1.5" fontFamily="font2" color="#777">
          Home/Shop/{product.Name}
        </Small>
      </div>

      <div
        className={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: :400px;
            justify-content: space-evenly;

          `}
      >
        <div
          className={css`
              
              height: :400px;
              width:400px; 

            `}
        >
          <img
            className={css`
              
              height: :400px;
              width:400px; 

            `}
            src={`../${product.Picture}`}
            alt=""
          />
        </div>
        <div
          className={css`
            flex-direction: column;
            display: flex;
            justify-content: flex-start;

            padding: 10px 0;
          `}
        >
          <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
            {product.Name}
          </H2>
          <H3 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
            {product.Price}
          </H3>
          <div
            className={css`
              display: flex;
              margin-top: 70px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Age:
            </Small>
            <Small>{product.Age}</Small>
          </div>

          <div
            className={css`
              display: flex;
              margin-top: 25px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Purpose:
            </Small>
            <Small>{product.Purpose}</Small>
          </div>

          <div
            className={css`
              display: flex;
              margin-top: 25px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Gender:
            </Small>
            <Small>{product.Gender}</Small>
          </div>

          <div
            className={css`
              display: flex;
              margin-top: 25px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Skin type:
            </Small>
            <Small>{product.SkinType}</Small>
          </div>

          <div
            className={css`
              display: flex;
              margin-top: 25px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Made in:
            </Small>
            <Small>{product.MadeIn}</Small>
          </div>

          <div
            className={css`
              display: flex;
              margin-top: 25px;
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Volume:
            </Small>
            <Small>{product.Volume}</Small>
          </div>
        </div>
      </div>
      <Space />
      <Space />
      <div
        className={css`
          padding: 50px;
          width: 60%;
        `}
      >
        <H5 lineHeight="1.5" fontFamily="font5" color="black">
          Description:
        </H5>
        <H5 lineHeight="1.5" fontFamily="font5" color="rgba(25, 25, 25, 0.75)">
          {product.Description}
        </H5>
      </div>
      <Space />
    </div>
  )
}

export default SingleProduct
