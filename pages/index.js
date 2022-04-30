import React from 'react'
import { css, cx } from '@emotion/css'
import Head from 'next/head'
import Image from 'next/image'
import { Button, JumpUpButton, Logo, Space, H1, H2, H3, H4, H5, Small } from './components'
import { jsx, ThemeProvider, useTheme } from '@emotion/react'
import Navigation from './containers/Navigation/Navigation'
import AboutInHomePage from './containers/AboutInHomePage/AboutInHomePage'
import PictureOfAboutInHomePage from './containers/PictureOfAboutInHomePage/PictureOfAboutInHomePage'
import ProductsSlider from './containers/ProductsSlider/ProductsSlider'
import AboutInHomePage2 from './containers/AboutInHomePage2/AboutInHomePage2'
import Membership from './containers/Membership/Membership'
import Footer from './containers/Footer/Footer'
export default function Home() {

  const theme = useTheme()
  const color = `${theme.colors.darkBlue}`
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <header
          className={css`
          position:relative; 
         height:100vh
         `}>
          <Navigation />
          <img src='./images/Header.jpg' alt='poster'
            className={css`
            width:100%; 
            position:absolute; 
            z-index:-1; 
            max-height:100vh; 
          `} />
          <div className={css`
            position:absolute; 
            bottom:40%; 
            left:10%; 
          `}>
            <H5 fontFamily="font6" color='rgba(25, 25, 25, 0.75)'>It's made in Japan</H5>
            <Space />
            <H1 letterSpacing='5px' fontFamily="font7" color='#0c1c6c'>A Blessing of Water</H1>
            <H1 letterSpacing='5px' fontFamily="font7" color='#0c1c6c'>for Every Skin</H1>

          </div>
          <Button
            position="absolute"
            bottom="20%"
            left="10%"
          >Discover now →
          </Button>
        </header>
        <AboutInHomePage />
        <div className={css`
           display: inline-block;
           width: 100%;
          `}>
          <PictureOfAboutInHomePage />
        </div>
        <ProductsSlider />
        <AboutInHomePage2 />
        <Membership />
        <Footer />
        <JumpUpButton />
      </main >


    </div >
  )
}
