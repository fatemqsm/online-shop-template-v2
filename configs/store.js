import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const composeEnhancers = composeWithDevTools({
  name: 'online shop'
});
// const createMyStore = () => {
//   const cookies = new Cookies()
//   let logged = false
//   let email = ''
//   if (cookies.get('logged') === true) {
//     logged = cookies.get('logged')
//   }
//   if (cookies.get('email') && cookies.get('email').length > 0) {
//     email = cookies.get('email')
//   }
//   const store = createStore(
//     rootReducer,
//     {
//       auth: {
//         user: {
//           email,
//         },
//         logged,
//       },
//     },
//     composeEnhancers(applyMiddleware(thunk))
//   )

//   return store
// }

// export default createMyStore


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store

