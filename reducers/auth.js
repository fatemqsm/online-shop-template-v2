import actionTypes from "../configs/actionTypes"
import Cookies from 'universal-cookie';

const auth = (state = [], action) => {
  const cookies = new Cookies();
  console.log('action', action)
  switch (action.type) {


    case actionTypes.VALIDATE_ME_STARTED:
      return {
        ...state,
        loading: action.loading,
        logged: action.logged,
      }
    case actionTypes.VALIDATE_ME_SUCCESS:
      if (action.user && action.user.user) {
        user = {
          email: action.user.email,
        }
      }
      return {
        ...state,
        logged: action.logged,
        loading: action.loading,
        user: user[0],
      }
    case actionTypes.VALIDATE_ME_FAILED:
      return {
        ...state,
        ...action,
      }



    case actionTypes.GET_ALL_USERS_INFORMATION_STARTED:
      return {
        ...state,
        loading: action.loading,
      }
    case actionTypes.GET_ALL_USERS_INFORMATION_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        user: action.user,
      }
    case actionTypes.GET_ALL_USERS_INFORMATION_FAILED:
      return {
        ...state,
        ...action
      }


    case actionTypes.REGISTER_STARTED:
      return {
        ...state,
        loading: action.loading,
        register: false
      }
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        register: true,
      }
    case actionTypes.REGISTER_FAILED:
      return {
        ...state,
        register: false,
      }


    case actionTypes.LOGOUT:
      return {
        ...state,
        type: action.type,
        logged: false,
        user: {},
      }

    case actionTypes.LOGIN:
      if (action.user) { cookies.set('user', JSON.stringify(action.user), { path: '/' }); }

      return {
        ...state,
        logged: true,
        user: action.user,
      }
    default:
      return state
  }
}

export default auth
