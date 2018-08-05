import { AnyAction } from 'redux'
import { State } from '../interfaces/State'
import { USER_LOGIN, USER_LOGOUT } from '../actions/user'

export const initialState: State['USER'] = {
  email: null,
  firstName: null,
  isLogged: false,
  lastName: null,
  role: null,
  token: null,
}

const User = (state: State['USER'] = initialState, action: AnyAction) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        email: action.payload.email || null,
        firstName: action.payload.firstName || null,
        isLogged: true,
        lastName: action.payload.lastName || null,
        role: action.payload.role || null,
        token: action.payload.token || null,
      }
    case USER_LOGOUT:
      return {
        ...state,
        ...initialState,
        isLogged: false,
      }
    default:
      return state
  }
}

export default User
