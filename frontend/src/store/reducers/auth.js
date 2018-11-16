import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, LOADING } from '../actions/auth'

export default (state = { user: null, error: '', loading: true }, action) => {
  switch (action.type) {
  case AUTH_USER:
    return { ...state, user: action.payload, loading: false }
  case AUTH_ERROR:
    return { ...state, error: action.payload }
  case UNAUTH_USER:
    return { ...state, user: null, loading: false }
  case LOADING:
    return { ...state, loading: true }
  default:
    return state
  }
}
