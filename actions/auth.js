import actionTypes from "../configs/actionTypes";
import reduxCall from "../utils/reduxCall";

// const VALIDATE_ME_ACTION = () => {
//   return async (dispatch) => {
//     return reduxCall(dispatch, {
//       url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/token',
//       method: 'GET',
//       name: 'VALIDATE_ME',
//     })
//   }
// }

const VALIDATE_ME_ACTION = () => {
  return {
    type: actionTypes.VALIDATE_ME,
  }
}

const LOGIN_ACTION = (formValue) => {
  return {
    type: actionTypes.LOGIN,
    user: formValue.email
  }
}

const REGISTER_ACTION = (formValue) => {
  return async (dispatch) => {
    return reduxCall(dispatch, {
      name: 'REGISTER',
      url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/users',
      method: 'POST',
      body: formValue,
    })
  }
}
const LOGOUT_ACTION = () => {
  return {
    type: actionTypes.LOGOUT,
  }
}

export { VALIDATE_ME_ACTION, REGISTER_ACTION, LOGOUT_ACTION, LOGIN_ACTION }
