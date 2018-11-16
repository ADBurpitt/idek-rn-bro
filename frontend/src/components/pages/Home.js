import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'

import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

class Home extends Component {
  state = {  }

  getSession = () =>
    Auth.currentSession()
      .then(data => console.log(data))
      .catch(err => console.error(err))

  getUser = () =>
    Auth.currentAuthenticatedUser()
      .then(data => console.log(data))
      .catch(err => console.error(err))

  render() {
    return (
      <Container>
        <Jumbotron className="margin-top-100">
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          
          <Container className="text-center margin-top-100" >
            <Row>
              <Col><Button color="primary" onClick={this.getSession}>Get Session</Button></Col>
              <Col><Button color="primary" onClick={this.getUser}>Get User</Button></Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    )
  }
}

export default Home