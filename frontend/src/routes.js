import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import PrivateRoute from 'components/auth/PrivateRoute'
import AuthRoute from 'components/auth/AuthRoute'

import Home from 'components/pages/Home'

import Signin from 'components/auth/Signin'
import Signup from 'components/auth/Signup'

import Profile from 'components/pages/Profile'
import TestApi from 'components/pages/TestApi'

const Routes = () =>
  <Switch>
    <Route exact path='/' component={Home} />
    
    <AuthRoute path='/signin' component={Signin} />
    <AuthRoute path='/signup' component={Signup} />

    <PrivateRoute path='/test-api' component={TestApi} />
    <PrivateRoute path='/profile' component={Profile} />
    
    <Redirect from='*' to ='/' />
  </Switch>

export default Routes