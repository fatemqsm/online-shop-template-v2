import actionTypes from "../configs/actionTypes"

const product = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        ...action,
        carts: [
          ...state.carts,
          action.id
        ]
      }
    case actionTypes.REMOVE_FROM_CART:
      let newCarts = state.carts
      newCarts = newCarts.filter((cartId) => { return cartId != action.id })
      return {
        ...state,
        ...action,
        carts: newCarts,
      }
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
    default:
      return state
  }
}

export default product
