import { createStore, compose, combineReducers } from 'redux'

import firebase from 'firebase/app'
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
import { reduxFirestore, firestoreReducer } from 'redux-firestore'

import reducer from './ducks'
import 'firebase/firestore'

import { config } from '../firebase_config'

const rrConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
}

firebase.initializeApp(config)
firebase.firestore()
firebase.firestore().settings({ timestampsInSnapshots: true })

const reducers = combineReducers({
  reducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
})

export const store = createStore(
  reducers,
  compose(
    reactReduxFirebase(firebase, rrConfig),
    reduxFirestore(firebase),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
  )
)
