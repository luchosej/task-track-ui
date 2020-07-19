import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Message, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { createUser, selectLoading, selectError } from './signupSlice'
import logo from 'assets/images/logo/taskTrackLogo.png'
import './styles.scss'

export default function Signup() {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch();

  const handleOnSubmit = (name, email, password) => {
    dispatch(createUser(name, email, password))
  }

  return (
    <div className="signup">
      <Image className="signup__logo" src={logo} size="small" />
      <Message
        attached
        header='Welcome to TaskTrack!'
        content='Fill out the form below to sign-up for a new account'
      />
      <Form className="attached fluid segment" loading={loading} onSubmit={() => handleOnSubmit(name, email, password)}>
        <Form.Field onChange={(e) => setName(e.target.value)} required>
          <label>Full Name</label>
          <input placeholder='Full name' required />
        </Form.Field>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Field required onChange={(e) => setPassword(e.target.value)}>
          <label>Password</label>
          <input type='password' placeholder='Please type a password' minLength={7} />
        </Form.Field>
        <Button color='green' type='submit'>Sign up</Button>
      </Form>
      {error &&
        <Message negative>
          <p>{error}</p>
        </Message>
      }
      <p className="signup__link">Already have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}