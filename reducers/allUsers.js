import actionTypes from "../configs/actionTypes"

const allUsers = (state = [], action) => {
  switch (action.type) {

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

    default:
      return state
  }
}

export default allUsers
