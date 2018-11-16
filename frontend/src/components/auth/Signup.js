import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Auth } from 'aws-amplify'
import { Container, Row, Col, Input, Button, Jumbotron } from 'reactstrap'
import { authUser } from 'store/actions/auth'

const validate = ({ email, password, password_confirm }) => {
  const errors = {}

  if (!email)
    errors.email = 'Required'
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
    errors.email = 'Invalid email address'
  
  if (!password)
    errors.password = 'Required'
  else if (password.length < 6)
    errors.password = 'Must be 6 or more characters in length'
  
  if (!password_confirm)
    errors.password_confirm = 'Required'
  else if (password_confirm !== password)
    errors.password_confirm = 'Passwords do not match'


  return errors
}

class Signup extends Component {

  state = { error: '' }

  handleSignup = async ({ email, password }) => {
    try {
      await Auth.signUp(email, password)
      await Auth.signIn(email, password)
      this.props.authUser()
      console.log('success')
    } catch (error) {
      this.setState({ error })
    }
  }

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
            <Col> <h1>Sign up</h1> </Col>
          </Row>
          <Row>
            <Col sm={{  offset: 3, size: 6 }}>
              <form onSubmit={this.props.handleSubmit(this.handleSignup)} >
                <Field name="email" type="email" label="Email" component={this.renderField} />
                <Field name="password" type="password" label="Password" component={this.renderField} />
                <Field
                  name="password_confirm"
                  type="password"
                  label="Confirm Password"
                  component={this.renderField}
                />

                <Row className="margin-top-10 error-row">
                  <Col className="my-auto" sm={8} >
                    <span className="text-danger ">{this.state.error}</span>
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
  state => ({  }),
  { authUser }
)(reduxForm({ validate, form: 'SignUpForm' })(Signup))