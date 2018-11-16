import { of } from 'rxjs'
import { from } from 'rxjs'
import { map, catchError, mergeMap } from 'rxjs/operators'
import { ofType } from "redux-observable"

import { Auth } from 'aws-amplify'

import { SIGNIN, SIGNOUT, AUTH_ERROR } from 'store/actions/auth'
import { authUser, unauthUser } from 'store/actions/auth'

const signin = action$ => action$.pipe(
  ofType(SIGNIN),
  mergeMap(({ email, password }) => from(Auth.signIn(email, password)).pipe(
    mergeMap(_res => from(Auth.currentAuthenticatedUser()).pipe(
      map(user => authUser(user)))
    ),
    catchError(error => of({
      type: AUTH_ERROR,
      payload: error.message ? error.message : error, // server and client side response signatures
      error: true
    }))
  ))
)

// Auth.signOut responds with a 400 error for some reason,
// so catchError / map functions are swapped
const signout = action$ => action$.pipe(
  ofType(SIGNOUT),
  mergeMap(_action => from(Auth.signOut()).pipe(
    map(response => unauthUser(response)),
    catchError(error => of({
      type: AUTH_ERROR,
      payload: error,
      error: true
    }))
  ))
)

export default [ signin, signout ]