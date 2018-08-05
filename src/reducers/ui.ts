import { Action } from 'redux'
import { State } from '../interfaces/State'
import { CLOSE_MAIN_NAV, OPEN_MAIN_NAV } from '../actions/sidebar'

export const initialState: State['UI'] = {
  mainNavActive: true,
}

const Ui = (state: State['UI'] = initialState, action: Action) => {
  switch (action.type) {
    case CLOSE_MAIN_NAV:
      return {
        ...state,
        mainNavActive: false,
      }
    case OPEN_MAIN_NAV:
      return {
        ...state,
        mainNavActive: true,
      }
    default:
      return state
  }
}

export default Ui
