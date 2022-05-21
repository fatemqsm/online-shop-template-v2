import { Html, Head, Main, NextScript } from 'next/document'
import Reset from './components/Styles/Reset'
import Animations from './components/Styles/Animations'
import { css, cx } from '@emotion/css'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Reset />
        <Animations />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
