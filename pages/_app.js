import React, { useReducer } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'
import { Provider } from 'react-redux'
import store from '../configs/store'
import CartContext from '../contexts/CartContext'
import CartReducer from '../reducers/Carts'
import Cookies from 'universal-cookie';
import App from 'next/app'
import windowHandler from '../utils/windowHandler'
import createMyStore from '../configs/store'
import { VALIDATE_ME_ACTION, LOGOUT_ACTION } from '../actions'

const MyApp = ({ Component, pageProps }) => {
  // const store = createMyStore()

  const [state, dispatch] = useReducer(CartReducer, { carts: [] })
  return (
    <CartContext.Provider value={{ carts: state.carts, dispatchCart: dispatch }}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CartContext.Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store

  // let cookies = {
  //   get: () => { }
  // }

  // if (appContext.ctx.req) {
  //   cookies = new Cookies(appContext.ctx.req.headers.cookie)
  // } else {
  //   cookies = new Cookies();
  // }
  // windowHandler.cookies = cookies
  // if (cookies.get('user')) {
  //   await store.dispatch(VALIDATE_ME_ACTION())
  //   if (appContext.ctx.res) {
  //     const { auth } = await store.getState()
  //     const { email } = auth.user
  //     const emailCookie = `email=${email}`
  //     appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)
  //     const loggedCookie = `logged=${auth.logged}`
  //     appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
  //   }
  // }

  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps
  }
}
export default MyApp
