import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Message, Image } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import { loginUser, selectLoading, selectError } from './loginSlice'
import logo from 'assets/images/logo/taskTrackLogo.png'
import './styles.scss'

export default function Login() {
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const loading = useSelector(selectLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch();

  const handleOnSubmit = (email, password) => {
    dispatch(loginUser(email, password))
  }

  return (
    <div className="login">
      <Image className="login__logo" src={logo} size="small" />
      <Message
        attached
        header='Welcome to TaskTrack!'
        content='Fill out the form below to log-in'
      />
      <Form className="attached fluid segment" loading={loading} onSubmit={() => handleOnSubmit(email, password)}>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Form.Field
          required
          onChange={(e) => setPassword(e.target.value)}
        >
          <label>Password</label>
          <input type='password' />
        </Form.Field>
        <Button color='blue' type='submit'>Login</Button>
      </Form>
      {error &&
        <Message negative>
          <p>{error}</p>
        </Message>
      }
      <p className="login__link">You don't have an account? <Link to="/signup">Signup</Link></p>
    </div>
  )
}