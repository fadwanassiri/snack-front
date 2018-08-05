export const ABSOLUTE_PATH: string = `${process.env.PUBLIC_URL ||
  window.location.origin}`

export const BASE_PATH: string = `${process.env.REACT_APP_BASE_PATH || '/'}`

// COMMON
export const HOME = `${BASE_PATH}`

export const LOGIN = `${BASE_PATH}login`
export const LOGOUT = `${BASE_PATH}logout`

export const ALL_COMMON = [HOME, LOGIN, LOGOUT]
