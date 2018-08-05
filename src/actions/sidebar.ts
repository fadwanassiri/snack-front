export const OPEN_MAIN_NAV = 'OPEN_MAIN_NAV'
export const CLOSE_MAIN_NAV = 'CLOSE_MAIN_NAV'

export function openMainNav() {
  return {
    payload: {},
    type: OPEN_MAIN_NAV,
  }
}

export function closeMainNav() {
  return {
    payload: {},
    type: CLOSE_MAIN_NAV,
  }
}
