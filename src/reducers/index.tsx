import { combineReducers } from 'redux'
import routing, { initialState as routingInitialState } from './routing'
import ui, { initialState as uiInitialState } from './ui'
import user, { initialState as userInitialState } from './user'

export const initialState = {
  routing: routingInitialState,
  UI: uiInitialState,
  USER: userInitialState,
}

const reducers = combineReducers({
  routing,
  UI: ui,
  USER: user,
})

export default reducers
