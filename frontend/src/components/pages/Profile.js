import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Container, Row, Col, Jumbotron } from 'reactstrap'

class Profile extends Component {
  state = {  }
  
  render() {
    return (
      <Container>
        <Jumbotron className="margin-top-100">
          <Container className="text-center" >
            <Row>
              <Col>
                <h1>{ this.props.user.username }</h1>
              </Col>
            </Row>
            <Row className="margin-top-25" >
              <Col>
                <h3>{ this.props.user.attributes.email }</h3>
              </Col>
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
)(Profile)