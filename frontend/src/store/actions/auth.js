
export const SIGNOUT = '[auth] signout'
export const SIGNIN = '[auth] signin'
export const AUTH_USER = '[auth] auth user'
export const AUTH_ERROR = '[auth] error'
export const UNAUTH_USER = '[auth] signout user'
export const LOADING = '[auth] loading'

export const signout = () => ({ type: SIGNOUT })
export const signin = credentials => ({ type: SIGNIN, ...credentials })

export const authUser = user => ({ type: AUTH_USER, payload: user })
export const authError = error => ({ type: AUTH_ERROR, payload: error })
export const unauthUser = () => ({ type: UNAUTH_USER })
export const loading = () => ({ type: LOADING })