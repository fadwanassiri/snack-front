import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { Routing } from '../interfaces/Routing'
import { State } from '../interfaces/State'
import reducers, { initialState } from '../reducers'
import logger from '../middlewares/logger'
import ui from '../middlewares/ui'
import user from '../middlewares/user'

export const configureStore = (
  history: Routing.HistoryObject,
  state: State = initialState,
) => {
  const createStoreWithMiddleware = compose(
    applyMiddleware(routerMiddleware(history), logger, ui, user),
  )
  const finalCreateStore = createStoreWithMiddleware(createStore)
  const store = finalCreateStore(reducers, state)

  return store
}
