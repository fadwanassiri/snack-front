import {
  ABSOLUTE_PATH,
  LOGIN,
  LOGOUT,
} from './routes'

export const TENANT_ID = `${process.env.REACT_APP_AUTH_TENANT_ID}`
export const CLIENT_ID = `${process.env.REACT_APP_AUTH_CLIENT_ID}`
export const RESOURCE = `${process.env.REACT_APP_AUTH_RESOURCE}`
export const REDIRECT_URI = `${ABSOLUTE_PATH}${LOGIN}`
export const POST_LOGOUT_REDIRECT_URI = `${ABSOLUTE_PATH}${LOGOUT}`

export const TOKEN_PARAM = 'access_token'

// AUTH
export const AUTH_URL =
  'https://login.microsoftonline.com/:tenant_id/oauth2/authorize?client_id=:client_id&response_type=token&redirect_uri=:redirect_uri&nonce=:nonce&resource=:resource'
export const AUTH_PARAMS = {
  client_id: CLIENT_ID,
  redirect_uri: REDIRECT_URI,
  tenant_id: TENANT_ID,
  resource: RESOURCE,
}

// LOGOUT
export const LOGOUT_URL =
  'https://login.microsoftonline.com/:tenant_id/oauth2/logout?post_logout_redirect_uri=:post_logout_redirect_uri'
export const LOGOUT_PARAMS = {
  post_logout_redirect_uri: POST_LOGOUT_REDIRECT_URI,
  tenant_id: TENANT_ID,
}

// TOKEN
export const TOKEN_URL =
  'https://login.microsoftonline.com/:tenant_id/oauth2/token'
export const TOKEN_PARAMS = {
  client_id: CLIENT_ID,
  grant_type: 'authorization_code',
  redirect_uri: REDIRECT_URI,
  resource: RESOURCE,
  tenant_id: TENANT_ID,
}

// RENEW
export const RENEW_URL =
  'https://login.microsoftonline.com/:tenant_id/oauth2/authorize?client_id=:client_id&response_type=token&redirect_uri=:redirect_uri&nonce=:nonce&resource=:resource&prompt=none'
export const RENEW_PARAMS = {
  client_id: CLIENT_ID,
  grant_type: 'authorization_code',
  redirect_uri: REDIRECT_URI,
  resource: RESOURCE,
  tenant_id: TENANT_ID,
}
