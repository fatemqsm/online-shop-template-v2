import React, { useEffect, useState, useContext, useCallback, useReducer } from 'react'
import { useRouter } from 'next/router'
import { GET_ALL_PRODUCTS_ACTION } from '../actions'
import { css, cx } from '@emotion/css'
import ProductInCart from '../containers/ProductInCart/ProductInCart'
import { useDispatch, useSelector } from 'react-redux'
import Small from '../components/Typography/Small'
import Button from '../components/Button/Button'
import Navigation from '../containers/Navigation/Navigation'
import Image from 'next/image'
import CartAlready from '../containers/CartAlready/CartAlready'
import PreviousOrders from '../containers/PreviousOrders/PreviousOrders'
import { Tabs, Tab } from 'react-bootstrap'
const Cart = () => {

  return (
    <>
      <div className={css`
        position :absolute; 
        top:0; 
      `}>
        <Navigation />
      </div>
      <div className={css`
        margin:100px 0; 
        `}>
        <Tabs defaultActiveKey="Cart" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Cart" title="Cart">
            <CartAlready />
          </Tab>
          <Tab eventKey="PreviousOrders" title="Previous orders">
            <PreviousOrders />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Cart
