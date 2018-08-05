// tslint:disable: no-console

import { Dispatch, Action, MiddlewareAPI, AnyAction } from 'redux'

export default (api: MiddlewareAPI<Dispatch<AnyAction>>) => (next: Dispatch<AnyAction>) => <
  A extends Action
  >(
    action: A,
) => {
  console.group(action.type)
  console.info('dispatching', action)

  let result = next(action)

  console.log('next state', api.getState())
  console.groupEnd()

  return result
}
