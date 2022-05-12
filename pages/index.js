import React from 'react'
import { css } from '@emotion/css'
import Head from 'next/head'
import Image from 'next/image'
import Header from './containers/Header/Header'
import { JumpUpButton } from './components'
import { useTheme } from '@emotion/react'
import AboutInHomePage from './containers/AboutInHomePage/AboutInHomePage'
import PictureOfAboutInHomePage from './containers/PictureOfAboutInHomePage/PictureOfAboutInHomePage'
import ProductsSlider from './containers/ProductsSlider/ProductsSlider'
import AboutInHomePage2 from './containers/AboutInHomePage2/AboutInHomePage2'
import Membership from './containers/Membership/Membership'
import Footer from './containers/Footer/Footer'
import { GET_ALL_PRODUCTS_ACTION } from '../actions'

const Home = ({ allProducts, loading }) => {
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
        <Header />
        <AboutInHomePage />
        <PictureOfAboutInHomePage />
        <ProductsSlider allProducts={allProducts} loading={loading} />
        <AboutInHomePage2 />
        <Membership />
        <Footer />
        <JumpUpButton />
      </main >
    </div >
  )
}

Home.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(GET_ALL_PRODUCTS_ACTION())
  const { allProducts } = reduxStore.getState()
  return {
    loading: allProducts.loading,
    allProducts: allProducts.allProducts,
  }
  // return {}
}

export default Home
