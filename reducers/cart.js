import actionTypes from "../configs/actionTypes"
import Cookies from 'universal-cookie';

const cart = (state = [], action) => {
  // const cookies = new Cookies();

  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const oldCarts = []
      state.carts ? oldCarts = state.carts : oldCarts = []
      let newCartsAddToCart = [
        ...oldCarts,
        action.productId
      ]
      // if (action.productId) {
      //   // cookies.set('carts', JSON.stringify(newCartsAddToCart), { path: '/' });
      // }
      return {
        carts: newCartsAddToCart
      }
    case actionTypes.REMOVE_FROM_CART:
      let newCartsRemoveToCart = state.carts
      newCartsRemoveToCart = newCartsRemoveToCart.filter((cartId) => { return cartId != action.productId })
      // if (action.productId) { cookies.set('carts', JSON.stringify(newCartsRemoveToCart), { path: '/' }); }

      return {
        carts: newCartsRemoveToCart
      }
    // {
    //   // ...state,
    //   // ...action,
    //   carts: newCarts,
    // }
    // case actionTypes.ADD_TO_CART_FAILED:
    //   return {
    //     ...state,
    //     ...action
    //   }
    // case actionTypes.REMOVE_FROM_CART:
    //   return {
    //     ...state,
    //     logged: action.logged,
    //   }

    case actionTypes.PAYMENT_STARTED:
      return {
        ...state,
        loading: action.loading,
      }

    case actionTypes.PAYMENT_SUCCESS:
      // cookies.remove('carts')
      return {
        loading: action.loading,
        carts: []
      }
    case actionTypes.PAYMENT_FAILED:
      return {
        loading: action.loading,
        ...state,
        error: action.error
      }


    default:
      return state
  }
}

export default cart
