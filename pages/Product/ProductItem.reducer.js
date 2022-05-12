
const ProductItemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        added: true,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        added: false,
      }
    case 'PROCEED_TO_CHECKOUT':
      return {
        ...state,
        user: user,
        carts: carts,
        price: price,
      }
    case 'PAYMENT':
      return {
        ...state,
        user: user,
        carts: [],
        price: 0,
      }
  }
}

export default ProductItemReducer
