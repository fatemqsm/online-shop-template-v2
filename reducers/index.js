import { combineReducers } from 'redux'
import auth from './auth'
import cart from './cart'
import allProducts from './allProducts'
import allUsers from './allUsers'

export default combineReducers({
  auth,
  cart,
  allProducts,
  allUsers,
})
