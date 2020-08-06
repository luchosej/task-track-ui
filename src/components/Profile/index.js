import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from './ProfileCard'
import UpdateUser from './UpdateUser'
import { fetchUser, selectUser } from './profileSlice'
import './styles.scss'
import { Header } from 'semantic-ui-react'

export default function Profile() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  return (
    <>
    <Header as='h1' style={{ marginTop: '0px'}}>Profile</Header>
    <div className='profile'>
      {user && (
        <>
          <ProfileCard user={user} />
          <UpdateUser {...user} />
        </>
      )}
    </div>
    </>
  )
}
