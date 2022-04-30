import React from 'react'
import { css, cx } from '@emotion/css'
import Navigation from './containers/Navigation/Navigation'
import AboutInHomePage from './containers/AboutInHomePage/AboutInHomePage'
import PictureOfAboutInHomePage from './containers/PictureOfAboutInHomePage/PictureOfAboutInHomePage'
import Footer from './containers/Footer/Footer'

const About = () => {
  return (
    <div
      className={css`
        margin-top: 0;
        font-size: 3.052rem;
      `}
    >
      <Navigation />
      <AboutInHomePage />
      <PictureOfAboutInHomePage />
      <div className={css`
        margin-top: 400px;
      `}><Footer /></div>


    </div >
  )
}

export default About
