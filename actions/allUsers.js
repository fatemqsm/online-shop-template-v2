import actionTypes from "../configs/actionTypes";
import reduxCall from "../utils/reduxCall";


const GET_ALL_USERS_INFORMATION_ACTION = () => {

  return (dispatch) => {
    return reduxCall(dispatch, {
      name: 'GET_ALL_USERS_INFORMATION',
      url: 'https://62711f28e1c7aec428fc31ae.mockapi.io/users',
      method: 'GET'
    })
  }
}

export { GET_ALL_USERS_INFORMATION_ACTION }
