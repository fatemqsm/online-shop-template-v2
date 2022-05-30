import React, { useState, useEffect } from 'react'
import { css, cx } from '@emotion/css'
import { useRouter } from 'next/router'
import Navigation from '../../containers/Navigation/Navigation'
import H2 from '../../components/Typography/H2'
import H5 from '../../components/Typography/H5'
import H3 from '../../components/Typography/H3'
import Small from '../../components/Typography/Small'
import Space from '../../components/Space/Space'
import { useDispatch, useSelector } from 'react-redux'
import AddToCartButton from '../../containers/AddToCartButton/AddToCartButton'
import Image from 'next/image'

const SingleProduct = (props) => {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  let router = useRouter()
  const [product, setProduct] = useState({})
  useEffect(() => {
    let pathName = router.asPath
    let productId = pathName.slice(9, 45)
    setProduct(PRODUCTS.find((item) => item.Id === productId))
  }, [])
  console.log('product.Picture', product.Picture)
  const picture = `/${product.Picture}`
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
          ${mq[1]} {
            margin: 100px 20px;
          }
        `}
      >
        <Small lineHeight="1.5" fontFamily="font2" color="#777">
          Home / Shop / {product.Name}
        </Small>
      </div>

      <div
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;
          justify-content: space-evenly;
          ${mq[1]} {
            flex-direction: column;
          }
        `}
      >
        <div
          className={css`
              height: :400px;
              width:400px; 
            `}
        >
          <Image
            loading="lazy"
            src={picture}
            alt="product picture"
            width={400}
            height={400}
          />
        </div>
        <div
          className={css`
            flex-direction: column;
            display: flex;
            justify-content: flex-start;
            padding: 10px 0;
            ${mq[1]} {
              padding: 20px;
            }
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
              gap: 0 10px;
            `}
          >
            <Small fontFamily="font6 " fontSize="1.1rem">
              Volume:
            </Small>
            <Small>{product.Volume}</Small>
          </div>
          <div
            className={css`
              margin-top: 70px;
            `}
          >
            <AddToCartButton productId={product.Id} />
          </div>
        </div>
      </div>
      <Space />
      <Space />
      <div
        className={css`
          padding: 50px;
          width: 60%;
          ${mq[1]} {
            width: 100%;
            padding: 20px;
          }
        `}
      >
        <H5 lineHeight="1.5" fontFamily="font5" color="black">
          Description:
        </H5>
        <H5
          fontSize="1.1em"
          lineHeight="1.5"
          fontFamily="font5"
          color="rgba(25, 25, 25, 0.75)"
        >
          {product.Description}
        </H5>
      </div>
      <Space />
      {/* <Gallary productPicture={`../${product.Picture}`} /> */}
    </div>
  )
}

export default SingleProduct
