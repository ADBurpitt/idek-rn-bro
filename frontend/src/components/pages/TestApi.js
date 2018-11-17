import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Auth } from 'aws-amplify'
import axios from 'axios'

import { API_URL } from 'config'

import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

class TestApi extends Component {
  state = {
    token: null,
    helloWorld: { data: '', status: 'primary' }
  }
  
  componentDidMount = () =>
    Auth.currentSession()
      .then(data => this.setState({ token: data.idToken.jwtToken }))
      .catch(err => console.log(err))

  helloWorld = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/hello`, { headers: { 'Authorization': this.state.token } })
      this.setState({ helloWorld: { data: data.message, status: 'success' } })
    } catch (err) {
      console.log(err)
      // this.setState({ helloWorld: { error: err.response.data.message, status: 'danger' } })
    }
  }

  render() {
    const { helloWorld } = this.state
    return (
      <Container>
        <Jumbotron className="margin-top-100 text-center">
          <h1 className="display-3">Hello, API!</h1>
          <p className="lead">{ this.state.token ? 'Token ready' : 'No token' }</p>
          <hr className="my-2" />
          <Container className="margin-top-25 text-center">
            <Row>
              <Col sm={3}><h2>Hello World</h2></Col>
              <Col sm={2}>
                <Button color={helloWorld.status} onClick={this.helloWorld} >Get IP</Button>
              </Col>
              <Col className="my-auto" sm={1}><h5>IP:</h5></Col>
              <Col className="my-auto"><h3>{ helloWorld.data }</h3></Col>
            </Row>
          </Container>
        </Jumbotron>
      </Container>
    )
  }
}

export default connect(
  state => ({ user: state.auth.user }),
  {  }
)(TestApi)