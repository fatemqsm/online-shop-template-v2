import { combineReducers } from 'redux'
import auth from './auth'
import product from './product'
import allProducts from './allProducts'


export default combineReducers({
  auth,
  product,
  allProducts,
})
