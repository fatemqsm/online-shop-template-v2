import React from 'react'
import { css, cx } from '@emotion/css'
import Navigation from '../containers/Navigation/Navigation'
import AboutInHomePage from '../containers/AboutInHomePage/AboutInHomePage'
import PictureOfAboutInHomePage from '../containers/PictureOfAboutInHomePage/PictureOfAboutInHomePage'
import Footer from '../containers/Footer/Footer'

const About = () => {
  return (
    <div
      className={css`
        margin-top: 0;
        font-size: 0.9rem;

      `}
    >
      <Navigation />
      <AboutInHomePage />
      <PictureOfAboutInHomePage />
      <Footer />


    </div >
  )
}

export default About
