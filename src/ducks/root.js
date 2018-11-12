import { combineReducers } from 'redux'
import { reducer as bills } from '../features/Bills/Bills.duck'

export default combineReducers({
  bills,
})
