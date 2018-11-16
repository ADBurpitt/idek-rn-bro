import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, auth, loading, ...rest }) =>
  loading ? null :
  <Route
    {...rest}
    render={ props => {
      return auth ?
        <Redirect to="/" />
        :
        <Component {...props} />
    }}
  />

export default connect(
  state => ({ auth: state.auth.user, loading: state.auth.loading })
)(PrivateRoute)
