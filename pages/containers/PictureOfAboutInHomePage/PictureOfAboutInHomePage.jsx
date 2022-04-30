import React from 'react'
import { css, cx } from '@emotion/css'
import { Button, H5 } from './../../components'
const PictureOfAboutInHomePage = () => {
  return (
    <section
      className={css`
        width: 100%;
        float: right;
      `}
    >
      <div
        className={css`
          whith: 100%;
          margin-bottom: 100px;
        `}
      >
        <div className="col-6 col-s-12" style={{ position: 'relative' }}>
          <img
            className={css`
              max-width: 100%;
              max-height: 400px;
            `}
            src="./images/About2.jpg"
          />
          <div
            className={css`
              position: absolute;
              top: 15%;
              padding: 0 20px;
              width: 50%;
              height: 65%;
              background-color: rgba(25, 25, 25, 0.35);
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-self: center;
              margin-left: 10px;
            `}
          >
            <H5 lineHeight="1.5" fontFamily="font6" color="white">
              Best Seller
            </H5>
            <H5 lineHeight="1.5" fontFamily="font4" color="white">
              UC Moist CC Cream
            </H5>
            <Button fontSize="15px" margin="10px 0" padding="10px 10px">
              Discover now →
            </Button>
          </div>
        </div>
        <div className="col-6 col-s-12" style={{ position: 'relative' }}>
          <img
            className={css`
              max-width: 100%;
              max-height: 400px;
            `}
            src="./images/About1.jpg"
          />
          <div
            className={css`
              position: absolute;
              top: 15%;
              padding: 0 20px;
              width: 50%;
              height: 65%;
              background-color: rgba(25, 25, 25, 0.35);
              border-radius: 4px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              align-self: center;
              margin-left: 10px;
            `}
          >
            <H5 lineHeight="1.5" fontFamily="font6" color="white">
              Best Seller
            </H5>
            <H5 lineHeight="1.5" fontFamily="font4" color="white">
              UC Moist CC Cream
            </H5>
            <Button fontSize="15px" margin="10px 0" padding="10px 10px">
              Discover now →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PictureOfAboutInHomePage
