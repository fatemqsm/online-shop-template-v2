
const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        carts: [
          ...state.carts,
          action.id
        ]
      }
    case 'REMOVE_FROM_CART':
      let newCarts = state.carts
      newCarts = newCarts.filter((cartId) => { return cartId != action.id })
      return {
        ...state,
        carts: newCarts,
      }
    case 'PAYMENT':
      let newCarts2 = []
      return {
        ...state,
        carts: newCarts2,
      }
    default:
      break;
  }
}

export default CartReducer
