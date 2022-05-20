import React, { useReducer } from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../configs/theme'
import { Provider } from 'react-redux'
import Cookies from 'universal-cookie';
import App from 'next/app'
import windowHandler from '../utils/windowHandler'
import createMyStore from '../configs/store'
import { VALIDATE_ME_ACTION, LOGOUT_ACTION } from '../actions'
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createMyStore()

const MyApp = ({ Component, pageProps }) => {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // const initialState = loadState();

  // store.subscribe(() => {
  //   saveState(store.getState());
  // });

  appContext.ctx.reduxStore = store

  let cookies = {}

  if (appContext.ctx.req) {
    cookies = new Cookies(appContext.ctx.req.headers.cookie)
  } else {
    cookies = new Cookies();
  }
  windowHandler.cookies = cookies
  if (cookies.get('user')) {
    // await store.dispatch(VALIDATE_ME_ACTION())
    if (appContext.ctx.res) {
      // let currentState = await store.getState()
      // currentState = JSON.stringify(currentState)
      // const newCookie = `redux_store=${currentState}`
      // appContext.ctx.res.setHeader('set-cookie', `${newCookie}`)

      const { auth } = await store.getState()

      const { email } = auth.user
      const emailCookie = `user=${email}`
      appContext.ctx.res.setHeader('set-cookie', `${emailCookie}`)

      const loggedCookie = `logged=${auth.logged}`
      appContext.ctx.res.setHeader('set-cookie', `${loggedCookie}`)
    }
  }
  // if (cookies.get('carts')) {
  //   // await store.dispatch(VALIDATE_ME_ACTION())
  //   if (appContext.ctx.res) {
  //     // let currentState = await store.getState()
  //     // currentState = JSON.stringify(currentState)
  //     // const newCookie = `redux_store=${currentState}`
  //     // appContext.ctx.res.setHeader('set-cookie', `${newCookie}`)
  //     const cart = await store.getState()
  //     // console.log('cart in _app.js', cart)
  //     const carts = JSON.stringify(cart.cart.carts)
  //     // console.log('cart in app.js', cart)
  //     const cartsCookie = `carts=${carts}`
  //     appContext.ctx.res.setHeader('set-cookie', `${cartsCookie}`)
  //   }
  // }

  const pageProps = await App.getInitialProps(appContext)
  return {
    ...pageProps
  }
}
export default MyApp
