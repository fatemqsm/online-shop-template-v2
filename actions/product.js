import actionTypes from "../configs/actionTypes";
import reduxCall from "../utils/reduxCall";

const ADD_TO_CART = (product) => {
  return (dispatch) => {
    return reduxCall(dispatch, {
      productId: product.Id,
      productName: product.Name,
      name: 'ADD_TO_CART'
    })
  }
}

// const REMOVE_FROM_CART = () => {
//   return {
//     type: actionTypes.REMOVE_FROM_CART,
//   }
// }
export { ADD_TO_CART }
