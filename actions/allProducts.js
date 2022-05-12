import actionTypes from "../configs/actionTypes";
import reduxCall from "../utils/reduxCall";

const GET_ALL_PRODUCTS_ACTION = (product) => {
  return (dispatch) => {
    return reduxCall(dispatch, {
      name: 'GET_ALL_PRODUCTS',
      url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/allproducts',
      method: 'GET'
    })
  }
}

export { GET_ALL_PRODUCTS_ACTION }
