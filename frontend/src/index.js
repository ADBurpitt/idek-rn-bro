import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

import Amplify from 'aws-amplify'
import { poolData } from 'config'

import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import { Provider } from 'react-redux'
import store from 'store'

import 'style'
import App from 'components/App'

Amplify.configure({
  Auth: poolData
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes />
      </App>
    </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
