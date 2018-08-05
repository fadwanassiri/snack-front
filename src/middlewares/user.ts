import { Dispatch, AnyAction, MiddlewareAPI } from 'redux'
import * as AUTH from '../constants/auth'
import { USER_AUTH, USER_LOGIN, USER_LOGOUT, USER_RENEW } from '../actions/user'
import { isInIframe } from '../utils/env'
import { getUrlFromRoutePath } from '../utils/routes'

export default (api: MiddlewareAPI<Dispatch<AnyAction>>) => (next: Dispatch<AnyAction>) => <
  A extends AnyAction
  >(
    action: A,
) => {
  const canChangeLocation = !isInIframe()
  let url: string = ''

  if ([USER_AUTH, USER_RENEW, USER_LOGIN, USER_LOGOUT].indexOf(action.type)) {
    if (action.payload.redirect_uri && !localStorage.getItem('redirect_uri')) {
      localStorage.setItem('redirect_uri', action.payload.redirect_uri)
    }
  }

  if (action.type === USER_AUTH) {
    if (!canChangeLocation) {
      window.parent.postMessage('logout', window.location.href)
    }

    url = getUrlFromRoutePath(AUTH.AUTH_URL, {
      ...AUTH.AUTH_PARAMS,
      nonce: Date.now(),
    })
  } else if (action.type === USER_RENEW) {
    localStorage.removeItem('token')

    url = getUrlFromRoutePath(AUTH.RENEW_URL, {
      ...AUTH.AUTH_PARAMS,
      nonce: Date.now(),
    })
  } else if (action.type === USER_LOGIN) {
    if (action.payload.token) {
      localStorage.setItem('token', action.payload.token)

      if (!canChangeLocation) {
        window.parent.postMessage('login', window.location.href)
      }
    }
  } else if (action.type === USER_LOGOUT) {
    localStorage.removeItem('token')

    if (!canChangeLocation) {
      window.parent.postMessage('logout', window.location.href)
    }

    url = getUrlFromRoutePath(AUTH.LOGOUT_URL, {
      ...AUTH.LOGOUT_PARAMS,
    })
  }

  if (url && canChangeLocation) {
    setTimeout(() => {
      window.location.href = url
    }, 100)
  }

  return next(action)
}
