import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
