import { actions } from "@storybook/addon-actions";
import actionTypes from "../configs/actionTypes";
import fetchUrl from "./fetchUrl";

const reduxCall = async (dispatch, { url, method, body, name, user = '', productName = '', productId = '' }) => {
  dispatch({
    type: actionTypes[`${name}_STARTED`],
    loading: true,
  })
  try {
    if (method === 'GET') {
      const req = await fetchUrl({ url, method, body })
      const i = await JSON.parse(req)
      dispatch({
        type: actionTypes[`${name}_SUCCESS`],
        loading: false,
        user: i,
      })
    } else {
      const req = await fetchUrl({ url, method, body })
      dispatch({
        type: actionTypes[`${name}_SUCCESS`],
        loading: false,
      })
    }
    // const req = await fetchUrl({ url, method, body })
    // const i = await JSON.parse(req)
    // const req = await fetchUrl({ url, method, body })
    // dispatch({
    //   type: actionTypes[`${name}_SUCCESS`],
    //   loading: false,
    //   user: i,
    // })
  } catch (e) {
    console.log('error', e)
    dispatch({
      type: actionTypes[`${name}_FAILED`],
      loading: false,
      error: true,
    })
  }
}

export default reduxCall
