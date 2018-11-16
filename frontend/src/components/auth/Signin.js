import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Container, Row, Col, Input, Button, Jumbotron } from 'reactstrap'
import { signin } from 'store/actions/auth'

const validate = ({ email, password }) => {
  const errors = {}

  if (!email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = 'Invalid email address'
  }

  if (!password)
  errors.password = 'Required'

  return errors
}

class Signin extends Component {
  
  renderField = ({ input, label, type, meta: { touched, error, warning } }) =>
    <Container className="margin-top-10" >
      <Row>
        <Col >
            <Input {...input} placeholder={label} type={type} />
            {
              touched &&
              (
                (error && <span className="text-danger">{error}</span>)
                ||
                (warning && <span className="text-warning">{warning}</span>)
              )
            }
        </Col>
      </Row>
    </Container>

  render() {
    return (
      <Container>
        <Jumbotron className="margin-top-100 text-center" >
          <Row>
            <Col> <h1>Sign in</h1> </Col>
          </Row>
          <Row>
            <Col sm={{  offset: 3, size: 6 }}>
              <form onSubmit={this.props.handleSubmit(this.props.signin)} >
                <Field name="email" type="email" label="Email" component={this.renderField} />
                <Field name="password" type="password" label="Password" component={this.renderField} />

                <Row className="margin-top-10 error-row">
                  <Col className="my-auto" sm={8} >
                    <span className="text-danger ">{this.props.errorMsg}</span>
                  </Col>
                  <Col>
                    <Button className="margin-top-10 float-right" color="primary" >Submit</Button>
                  </Col>
                </Row>
              </form>
            </Col>
          </Row>

        </Jumbotron>
      </Container>
    )
  }
}

export default connect(
  state => ({ errorMsg: state.auth.error }),
  { signin }
)(reduxForm({ validate, form: 'SignInForm' })(Signin))