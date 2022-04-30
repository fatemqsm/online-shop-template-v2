import React from 'react'
import { css, cx } from '@emotion/css'
import PictureOfAboutInHomePage from './containers/PictureOfAboutInHomePage/PictureOfAboutInHomePage'
import Navigation from './containers/Navigation/Navigation'
const Shop = () => {
  return (
    <div
      className={css`
        margin-top: 0;
        font-size: 3.052rem;
      `}
    >
      <div className={css`
          position: absolute;
          top: 0;
        `}><Navigation /></div>
      <div className={css`
          margin-top:70px; 
        `}> <PictureOfAboutInHomePage /></div>

    </div>
  )
}

export default Shop
