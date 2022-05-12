import { Html, Head, Main, NextScript } from 'next/document'
import Reset from './components/Styles/Reset'
import Animations from './components/Styles/Animations'
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
