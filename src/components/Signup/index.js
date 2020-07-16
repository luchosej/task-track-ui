import React from 'react'
import { Button, Form, Input } from 'semantic-ui-react'
import './styles.scss'

export default function Signup() {
  return (
    <div className="signup">
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          error={false && {
            content: 'Please enter a valid email address',
            pointing: 'below',
          }}
        />
        <Button type='submit'>Sign up</Button>
      </Form>
    </div>
  )
}