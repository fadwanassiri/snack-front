export const USER_AUTH = 'USER_AUTH'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_RENEW = 'USER_RENEW'

export interface UserAuthData {
  redirect_uri: string
}

export interface userLoginData {
  email: string
  firstName?: string
  lastName?: string
  redirect_uri: string
  role: string
  token: string
}

export interface userLogoutData {
  redirect_uri?: string
}

export function userAuth(payload: UserAuthData) {
  return {
    type: USER_AUTH,
    payload,
  }
}

export function userLogin(payload: userLoginData) {
  return {
    type: USER_LOGIN,
    payload,
  }
}

export function userLogout(payload: userLogoutData) {
  return {
    type: USER_LOGOUT,
    payload,
  }
}

export function userRenew(payload: UserAuthData) {
  return {
    type: USER_RENEW,
    payload,
  }
}
