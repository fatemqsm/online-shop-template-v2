import React, { useState, useEffect, useReducer, useContext } from 'react'
// import { Button, H2, H3, H5, Small, Space } from '../components'
import Button from '../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_CART_ACTION, REMOVE_FROM_CART_ACTION } from '../../actions/cart'

const AddToCartButton = ({ productId }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const added = cart.carts?.includes(productId)

  const handleAddToCart = () => {
    if (added === true) {
      dispatch(REMOVE_FROM_CART_ACTION(productId))
    } else {
      dispatch(ADD_TO_CART_ACTION(productId))
    }
  }

  return (
    <>
      <Button
        onClick={() => handleAddToCart()}
        width="100%"
        backgroundColor="#fbede7"
        backgroundColorHover="#0c1c6c"
        color="#0c1c6c"
        colorHover="white"
      >
        {added ? 'Delete from cart' : 'Add to cart'}
      </Button>
    </>
  )
}

export default AddToCartButton
