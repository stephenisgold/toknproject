const { SET_EMAIL, SET_IS_LOGGED_IN } = require('../actions/types');

const INITIAL_STATE = {
  email: '',
  isLoggedIn: false
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case SET_IS_LOGGED_IN:
      if (state.email !== '') {
        return {
          ...state,
          isLoggedIn: action.isLoggedIn
        }
      } else {
        alert(`${state.email} does not exist!`)
        return state
      }
    default:
      return state
  }
}

export default userReducer