import actionTypes from "../configs/actionTypes"
const allProducts = (state = [], action) => {

  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        allProducts: action.user,
      }
    case actionTypes.GET_ALL_PRODUCTS_FAILED:
      return {
        ...state,
        ...action,
      }

    default:
      return state
  }
}

export default allProducts
