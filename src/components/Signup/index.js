import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react'
import createUserAPI from 'api/UserAPI/createUserAPI'
import {
  fetchUser,
  fetchUserSuccess,
  fetchUserFail
} from './signupSlice'
import './styles.scss'

export default function Signup() {
  const [name, setName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const dispatch = useDispatch();

  const handleOnSubmit = async (name, email, password) => {
    dispatch(fetchUser())
    const data = await createUserAPI(name, email, password)
    if (data.errors)
      return dispatch(fetchUserFail(data.errors))
    dispatch(fetchUserSuccess(data))
  }

  return (
    <div className="signup">
      <Form onSubmit={() => handleOnSubmit(name, email, password)}>
        <Form.Field onChange={(e) => setName(e.target.value)}>
          <label>Full Name</label>
          <input placeholder='Full name' />
        </Form.Field>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          error={false && {
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
        <Form.Field placeholder='Please type a password' onChange={(e) => setPassword(e.target.value)}>
          <label>Password</label>
          <input type='password' />
        </Form.Field>
        <Button type='submit'>Sign up</Button>
      </Form>
    </div>
  )
}