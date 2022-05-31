import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'
import Cookies from 'universal-cookie';

const composeEnhancers = composeWithDevTools({
  name: 'online shop'
});

const createMyStore = () => {

  const cookies = new Cookies()
  // let init = {}
  let logged = false
  let user = ''
  let carts = ''
  // if (cookies.get('logged') === true) {
  //   logged = cookies.get('logged')
  // }
  if (cookies.get('user') && cookies.get('user').length > 0) {
    user = cookies.get('user')
    logged = true
  }
  if (cookies.get('carts') && cookies.get('carts').length > 0) {
    carts = cookies.get('carts')
  }
  // if (cookies.get('redux_store')) {
  //   init = cookies.get('redux_store')
  // }
  const store = createStore(
    rootReducer,
    // init,
    {
      auth: {
        user: user,
        logged,
      },
      cart: {
        carts,
      }
    },
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}

export default createMyStore


// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// export default store
// export const loadState = (): object | undefined => {
//   try {
//     const serializedState = sessionStorage.getItem('state');

//     if (serializedState === null) {
//       return {};
//     }
//     return JSON.parse(serializedState);
//   } catch (error) {
//     return undefined;
//   }
// };

// export const saveState = (state: object): void => {
//   console.log(state);
//   try {
//     const serializedState = JSON.stringify(state);
//     sessionStorage.setItem('state', serializedState);
//   } catch (error) {
//     // Ignore write errors
//   }
// };
