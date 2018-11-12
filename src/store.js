import { applyMiddleware, createStore, compose } from 'redux'
// import logger from 'redux-logger'
import rootReducer from './ducks/root'
import rootEpic from './epics/root'
import { createEpicMiddleware } from 'redux-observable'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()



export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(epicMiddleware)
    )
  )

  epicMiddleware.run(rootEpic)

  return store
}
