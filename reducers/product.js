import actionTypes from "../configs/actionTypes"

const product = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.ADD_TO_CART_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        productId: action.productId,
        ...action,
      }
    case actionTypes.ADD_TO_CART_FAILED:
      return {
        ...state,
        ...action
      }
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
