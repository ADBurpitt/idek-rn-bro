import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import { authUser, unauthUser } from 'store/actions/auth'
import Navbar from 'components/UI/Navbar'

class App extends Component {
  state = {  }

  componentDidMount = () =>
    Auth.currentAuthenticatedUser()
      .then(data => this.props.authUser(data))
      .catch(_err => this.props.unauthUser())

  render() {
    return (
      <main className="app">
        <Navbar />
        {this.props.children}
      </main>
    )
  }
}

export default withRouter(connect(
  null,
  { authUser, unauthUser }
)(App))
