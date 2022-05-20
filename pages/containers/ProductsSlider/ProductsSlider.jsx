import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GET_ALL_PRODUCTS_ACTION } from '../../../actions'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { css, cx } from '@emotion/css'
import fetchUrl from '../../../utils/fetchUrl'
import Products from './Products'
import QuickViewIcon from './QuickViewIcon'
import { Button, Space, H2 } from './../../components'
import Link from 'next/link'

const ProductsSlider = ({ allProducts, loading }) => {
  const [numberOfSlidesToShow, setNumberOfSlidesToShow] = useState(4)
  const [displayWidth, setDisplayWidth] = useState(4)

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
        <img
          className={css`
            width: 100px;
          `}
          src="./loading.svg"
          alt=""
        />
      )}
      <Space />
      <Space />
      <Link href="/Shop">
        <Button>View all products →</Button>
      </Link>
      <Space />
      <Space />
    </div>
  )
}

export default ProductsSlider
