import { routerReducer } from 'react-router-redux'
import { BASE_PATH } from '../constants/routes'

export const initialState = {
  location: {
    hash: '',
    pathname: BASE_PATH,
    search: '',
    state: undefined,
  },
}

export default routerReducer
