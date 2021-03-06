import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { css, cx } from '@emotion/css'
import Button from '../../components/Button/Button'
import Space from '../../components/Space/Space'
import H2 from '../../components/Typography/H2'
import Products from './Products'
import Link from 'next/link'
import Image from 'next/image'

const ProductsSlider = ({ allProducts, loading }) => {
  // const ProductsSlider = () => {
  const [numberOfSlidesToShow, setNumberOfSlidesToShow] = useState(4)
  const [displayWidth, setDisplayWidth] = useState(4)
  const dispatch = useDispatch()

  // const allProducts = useSelector((state) => state.allProducts.allProducts)
  // const loadAllProducts = () => {
  //   dispatch(GET_ALL_PRODUCTS_ACTION())
  // }
  // useEffect(() => {
  //   loadAllProducts()
  // }, [])

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    console.log('width', width)
    setDisplayWidth(width)
    if (width > 1000) {
      setNumberOfSlidesToShow(4)
    } else if ((width < 1000, width > 800)) {
      setNumberOfSlidesToShow(3)
    } else if ((width < 800, width > 600)) {
      setNumberOfSlidesToShow(2)
    } else {
      setNumberOfSlidesToShow(1)
    }
  }

  useEffect(() => {
    getWindowDimensions()
  }, [displayWidth])

  var settings = {
    dots: false,
    slidesToShow: numberOfSlidesToShow,
  }
  return (
    <div
      className={css`
        padding: 40px;
        text-align: center;
        position: relative;
      `}
    >
      <Space />
      <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
        Most Popular
      </H2>
      <Space />
      <Space />
      {allProducts ? (
        <Slider {...settings}>
          {allProducts.map((item) => (
            <Products data={item} key={`product-${item.Id}`} />
          ))}
        </Slider>
      ) : (
        <div
          className={css`
            justify-content: center;
          `}
        >
          <Image
            loading="lazy"
            src="/loading.svg"
            alt="loading"
            width={60}
            height={60}
          />
        </div>
      )}
      <Space />
      <Space />
      <Link href="/shop">
        <Button>View all products ???</Button>
      </Link>
      <Space />
      <Space />
    </div>
  )
}

export default ProductsSlider
