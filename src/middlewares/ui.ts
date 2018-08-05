import { Dispatch, Action, MiddlewareAPI, AnyAction } from 'redux'
import { OPEN_MAIN_NAV, CLOSE_MAIN_NAV } from '../actions/sidebar'

export default (api: MiddlewareAPI<Dispatch<AnyAction>>) => (next: Dispatch<AnyAction>) => <
  A extends Action
  >(
    action: A,
) => {
  if (action.type === OPEN_MAIN_NAV) {
    document.body.classList.remove('mini-navbar')
  } else if (action.type === CLOSE_MAIN_NAV) {
    document.body.classList.add('mini-navbar')
  }

  return next(action)
}
