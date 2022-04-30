import React, { useEffect } from 'react'
import { css, cx } from '@emotion/css'
import ProductsSlider from './containers/ProductsSlider/ProductsSlider'
import Navigation from './containers/Navigation/Navigation'
import Membership from './containers/Membership/Membership'
import Footer from './containers/Footer/Footer'
const Contact = () => {
  return (
    <div
      className={css`
        margin-top: 0;
        font-size: 3.052rem;
      `}
    >
      <Navigation />
      <Membership />
      <Footer />

    </div>
  )
}

export default Contact
Contact
