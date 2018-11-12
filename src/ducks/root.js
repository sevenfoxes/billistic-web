import { combineReducers } from 'redux'
// import { reducer as bills } from '../features/Bills/Bills.duck'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

export default combineReducers({
  firebase,
  // bills,
})
