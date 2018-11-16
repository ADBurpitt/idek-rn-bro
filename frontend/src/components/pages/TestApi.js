import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { API_URL } from 'config'

import { Container, Row, Col, Jumbotron, Button } from 'reactstrap'

class TestApi extends Component {
  state = { 
    helloWorld: { data: '', status: 'primary' }
  }
  
  helloWorld = async () => {
    try {
      const data = await axios.post(`${API_URL}/hello`, { Authorization: 'idk' })
      this.setState({ helloWorld: { data, status: 'success' } })
    } catch (error) {
      this.setState({ helloWorld: { error, status: 'danger' } })
    }
  }

  render() {
    const { helloWorld } = this.state
    return (
      <Container>
        <Jumbotron className="margin-top-100 text-center">
          <h1 className="display-3">Hello, API!</h1>
          <p className="lead">Click Buttons to test each API</p>
          <hr className="my-2" />
          <Container className="margin-top-25 text-center" >
            <Row>
              <Col sm={3}><h2>Hello World</h2></Col>
              <Col sm={2}>
                <Button color={helloWorld.status} onClick={this.helloWorld} >Get IP</Button>
              </Col>
              <Col className="my-auto" sm={1}><h5>IP:</h5></Col>
              <Col><p>{ helloWorld.data }</p></Col>
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