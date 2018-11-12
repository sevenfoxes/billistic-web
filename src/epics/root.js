import { combineEpics } from 'redux-observable'
import { setBillsEpic } from '../features/Bills/Bill.epics'

export default combineEpics(
  setBillsEpic
)
