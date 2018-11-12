import { ofType } from 'redux-observable'
import { catchError, delay, map, switchMap } from 'rxjs/operators'
import { actions } from './Bills.duck'
import { ajax } from 'rxjs/ajax'

const { setBills, setBillsSuccess } = actions
const url = 'https://jsonplaceholder.typicode.com/posts'

export const setBillsEpic = action$ => action$.pipe(
  ofType(setBills.type),
  delay(2000),
  switchMap(() =>
    ajax.getJSON(url).pipe(
      map(response => setBillsSuccess(response)),
      catchError(error => console.error('Problem!', error.message))
    )
  ),
  map(setBillsSuccess)
)
