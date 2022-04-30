import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { css, cx } from '@emotion/css'
import Products from './Products'
import PRODUCTS from './PRODUCTS.json'
import QuickViewIcon from './QuickViewIcon'
import { Button, Space, H2 } from './../../components'

const ProductsSlider = () => {
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
      <Space />
      <H2 letterSpacing="1px" fontFamily="font4" color="#0c1c6c">
        Most Popular
      </H2>
      <Space />
      <Space />
      <Slider {...settings}>
        {PRODUCTS.map((item) => (
          <Products data={item} key={`product-${item.Id}`} />
        ))}
      </Slider>
      <Space />
      <Space />
      <Button>View all products →</Button>

      <Space />
      <Space />
    </div>
  )
}

export default ProductsSlider
