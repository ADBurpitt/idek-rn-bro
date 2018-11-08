import React, { Component } from 'react'
import Amplify, { Auth } from 'aws-amplify'
import axios from 'axios'

import logo from './logo.svg'
import './App.css'
import { poolData, API_URL } from 'config'
import { Container, Row, Col, Button } from 'reactstrap'

Amplify.configure({
  Auth: poolData
})

class App extends Component {

  state = { data: '', session: null }

  handleClick = async () => {
    const { data } = await axios.get(`${API_URL}/hello`)
    this.setState({ data })
  }

  getSession = async () => {
    const session = Auth.currentSession()
    this.setState({ session })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col><Button>Get IP</Button></Col>
              <Col>IP:</Col>
              <Col>{this.state.data}</Col>
            </Row>
            <br />
            <Row>
              <Col><Button color="primary" >Get Session</Button></Col>
              <Col>{ this.state.session && <Button color="success">Log Session</Button>}</Col>
            </Row>
          </Container>
        </header>
      </div>
    )
  }
}

export default App
