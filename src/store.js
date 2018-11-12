import { createStore, compose } from 'redux'
// import logger from 'redux-logger'
import rootReducer from './ducks/root'
import rootEpic from './epics/root'
import { createEpicMiddleware } from 'redux-observable'
import firebase from "firebase/app"
import { firebase as firebaseConfig } from '../firebase_config'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'


const epicMiddleware = createEpicMiddleware()


export default function configureStore() {
  firebase.initializeApp(firebaseConfig)

  const rrfConfig = {
    logErrors: true,
  }

  const createStoreWithMiddleware = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )(createStore)

  const store = createStoreWithMiddleware(rootReducer)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextRootReducer = require('./reducer')
      store.replaceReducer(nextRootReducer)
    })
  }

  epicMiddleware.run(rootEpic)

  return store
}
