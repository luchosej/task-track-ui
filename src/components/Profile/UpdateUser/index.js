import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Header, Form, Input, Button, Message } from 'semantic-ui-react'
import { useHistory } from "react-router-dom";
import { showModal } from 'components/ModalContainer/modalSlice'
import { updateUser, deleteUser } from '../profileSlice'
import './styles.scss'

export default function UpdateUser({
  name,
  email,
  age,
}) {
  const [name_, setName] = useState(name)
  const [email_, setEmail] = useState(email)
  const [age_, setAge] = useState(age)
  const [password_, setPassword] = useState(undefined)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleOnSubmit = () => {
    dispatch(updateUser({
      name: name_,
      age: age_,
      email: email_,
      password: password_
    }))
  }

  const handleOnDelete = () => {
    dispatch(showModal({
      modalType: 'confirm',
      modalProps: {
        onConfirm: () => dispatch(deleteUser(history)),
        title: 'Delete User',
        content: 'Are you sure you want to delete your user?',
        icon: 'delete'
      }
    }))
  }

  return (
    <div className='update-user'>
      <Header>Info</Header>
      <Form className="attached" onSubmit={() => handleOnSubmit()}>
        <Form.Field onChange={(e) => setName(e.target.value)} value={name_}>
          <label>Full Name</label>
          <input placeholder='Full name' required value={name_} />
        </Form.Field>
        <Form.Field onChange={(e) => setAge(e.target.value)} value={name_}>
          <label>Age</label>
          <input placeholder='Age' type='number' required value={age_} />
        </Form.Field>
        <Form.Field
          id='form-input-control-error-email'
          control={Input}
          label='Email'
          labelPosition='left'
          placeholder='Email'
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          value={email_}
        />
        <Form.Field onChange={(e) => setPassword(e.target.value)}>
          <label>New Password</label>
          <input type='password' placeholder='Please type a password' minLength={7} />
        </Form.Field>
        <Form.Field className='update-user__btn'>
          <Button color='green' type='submit'>Update</Button>
        </Form.Field>
      </Form>

      <Message warning>
        <Message.Header>Danger Zone</Message.Header>
        <p>
          You will delete your user and all yous task will be missing in the dark!
        </p>
        <div className='update-user__delete-btn'>
          <Button
            negative
            onClick={() => handleOnDelete()}
          >
            Delete User
          </Button>
        </div>
      </Message>
    </div>
  )
}
