import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Form, TextArea, Button, Icon } from 'semantic-ui-react'
import { updateUser } from '../profileSlice'
import './styles.scss'

export default function ProfileBio({ bio }) {
  const [editing, setEditing] = useState(false)
  const [bio_, setBio] = useState(bio)
  const dispatch = useDispatch()
  const showBio = bio && !editing

  const handleOnSubmit = () => {
    dispatch(updateUser({ bio: bio_ }))
    setEditing(false)
  }
  return (
    <div className='profile-bio'>
      {showBio && (
        <div className='profile-bio__text'>
          <p>{bio}</p>
          <div onClick={() => setEditing(true)}>
            <span className='profile-bio__link'>Edit Bio</span>
            <span style={{ marginLeft: '5px', cursor: 'pointer'}}><Icon name='edit' /></span>
          </div>
        </div>
      )}
      {(!editing && !bio) && (
        <div className='profile-bio__link' onClick={() => setEditing(true)}>
          Add bio
        </div>
      )}
      {editing && (
        <Form onSubmit={() => handleOnSubmit()}>
          <Form.Field
            control={TextArea}
            placeholder='Add your BIO to know more about you!'
            onChange={(e) => setBio(e.target.value)}
            value={bio_}
          />
          <Form.Field control={Button}>Submit</Form.Field>
        </Form>
      )}
    </div>
  )
}
