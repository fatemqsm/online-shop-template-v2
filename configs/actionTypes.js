const actionTypes = {
  // auth
  VALIDATE_ME_STARTED: 'VALIDATE_ME_STARTED',
  VALIDATE_ME_SUCCESS: 'VALIDATE_ME_SUCCESS',
  VALIDATE_ME_FAILED: 'VALIDATE_ME_FAILED',

  GET_ALL_USERS_INFORMATION_STARTED: 'GET_ALL_USERS_INFORMATION_STARTED',
  GET_ALL_USERS_INFORMATION_SUCCESS: 'GET_ALL_USERS_INFORMATION_SUCCESS',
  GET_ALL_USERS_INFORMATION_FAILED: 'GET_ALL_USERS_INFORMATION_FAILED',

  REGISTER_STARTED: 'REGISTER_STARTED',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILED: 'REGISTER_FAILED',

  LOGIN: 'LOGIN',

  LOGOUT: 'LOGOUT',

  ADD_TO_CART_STARTED: 'ADD_TO_CART_STARTED',
  ADD_TO_CART_SUCCESS: 'ADD_TO_CART_SUCCESS',
  ADD_TO_CART_FAILED: 'ADD_TO_CART_FAILED',

  REMOVE_FROM_CART: 'REMOVE_FROM_CART',


  // allProducts
  GET_ALL_PRODUCTS_STARTED: 'GET_ALL_PRODUCTS_STARTED',
  GET_ALL_PRODUCTS_SUCCESS: 'GET_ALL_PRODUCTS_SUCCESS',
  GET_ALL_PRODUCTS_FAILED: 'GET_ALL_PRODUCTS_FAILED',
}
export default actionTypes
