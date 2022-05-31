import React, {
  useEffect,
  useState,
  useContext,
  useCallback,
  useReducer,
} from 'react'
import { css, cx } from '@emotion/css'
import { useRouter } from 'next/router'
import fetchUrl from '../../utils/fetchUrl'

const PreviousOrders = () => {
  const [allOrders, setAllOrders] = useState(null)
  const fetchAllOrders = async () => {
    try {
      const req = await fetchUrl({
        url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/cart',
      })
      return await JSON.parse(req)
    } catch (errore) {
      console.log('error', errore)
    }
  }
  useEffect(() => {
    const resault = fetchAllOrders()
    setAllOrders(resault)
  }, [])
  console.log('allOrders', allOrders)
  return (
    <>
      <div
        className={css`
          margin: 20px;
        `}
      >
        hi
      </div>
    </>
  )
}

export default PreviousOrders
