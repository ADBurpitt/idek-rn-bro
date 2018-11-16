import { combineEpics } from 'redux-observable'

import auth from './auth'

const rootEpic = combineEpics(
  ...auth
)

export default rootEpic