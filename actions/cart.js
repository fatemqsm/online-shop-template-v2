import actionTypes from "../configs/actionTypes";
import reduxCall from "../utils/reduxCall";

const ADD_TO_CART_ACTION = (productId) => {
  return {
    productId: productId,
    type: actionTypes.ADD_TO_CART,
  }
}

const REMOVE_FROM_CART_ACTION = (productId) => {
  return {
    productId: productId,
    type: actionTypes.REMOVE_FROM_CART
  }
}

const PAYMENT_ACTION = (ProceedToCheckout) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      name: 'PAYMENT',
      url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/cart',
      method: 'POST',
      body: ProceedToCheckout,
    })
  }
}

export { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION, PAYMENT_ACTION }



