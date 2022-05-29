import React, { useEffect, useState } from 'react'
import { css, cx, keyframes } from '@emotion/css'
import H5 from '../../components/Typography/H5'
import Space from '../../components/Space/Space'
import H1 from '../../components/Typography/H1'
import Button from '../../components/Button/Button'
import Navigation from '../Navigation/Navigation'
import Image from 'next/image'
import mq from '../../components/Styles/BREACKPOINT'
const HeaderTextAnimation = keyframes`
0%{
    transform: translateX(-100%);
    opacity: 0;
  }
  80%{
    transform: translateX(50px);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`
const Header = () => {
  // const BREACKPOINT = [576, 768, 992, 1200]
  // const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <header
      className={css`
        display: block;
        position: relative;
      `}
    >
      <Navigation />
      <div
        className={css`
          width: 100%;
          z-index: -1;
          height: 100vh;
          ${mq[1]} {
            height: 400px;
          }
        `}
      >
        <Image
          loading="lazy"
          layout="fill"
          src="/images/Header.jpg"
          alt="header picture"
        />
      </div>

      {/* <Image
        src="./images/Header.jpg"
        alt="poster"
        className={css`
          width: 100%;
          z-index: -1;
          max-height: 100vh;

          ${mq[1]} {
            height: 400px;
          }
        `}
      /> */}
      <div
        className={css`
          position: absolute;
          bottom: 40%;
          left: 10%;
          animation: ${HeaderTextAnimation} 0.8s ease;
          ${mq[2]} {
            bottom: 110px;
          }
          ${mq[1]} {
            bottom: 30px;
            left: 30px;
            animation: none 0.8s ease;
          }
        `}
      >
        <H5 fontFamily="font6" color="rgba(25, 25, 25, 0.75)">
          It&apos;s made in Japan
        </H5>
        <Space />
        <H1 letterSpacing="0.5rem" fontFamily="font7" color="#0c1c6c">
          A Blessing of Water
        </H1>
        <H1 letterSpacing="0.5rem" fontFamily="font7" color="#0c1c6c">
          for Every Skin
        </H1>
      </div>
      <div
        className={css`
          display: block;
          bottom: 20%;
          left: 10%;
          position: absolute;
          ${mq[2]} {
            bottom: 8%;
          }
          ${mq[1]} {
            display: none;
          }
        `}
      >
        <Button>Discover now →</Button>
      </div>
    </header>
  )
}

export default Header
