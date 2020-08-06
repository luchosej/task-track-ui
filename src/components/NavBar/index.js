import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Menu, Image } from 'semantic-ui-react'
import { StorageService } from 'services'
import { showModal, hideModal } from 'components/ModalContainer/modalSlice'
import logo from 'assets/images/logo/taskTrackMinimalTrans.png'
import { useDispatch } from 'react-redux'

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('dashboard')
  const history = useHistory()
  const dispatch = useDispatch()
  
  const removeToken = () => {
    StorageService.remove('user-token')
    history.push('/')
    dispatch(hideModal())
  }
  const handleLogout = (name) => {
    setActiveItem('logout')
    dispatch(showModal({
      modalType: 'confirm',
      modalProps: {
        onConfirm: () => removeToken(),
        title: 'Logout User',
        content: 'Are you sure you want to logout user?',
        icon: 'user close'
      }
    }))
  }


  return (
    <div style={{ padding: '5px 10px'}}>
      <Menu pointing secondary color='blue'>
          <Menu.Item style={{ padding: '1px 20px 3px 0px'}}>
            <Image src={logo} size="mini" />
            <span style={{ fontSize: '17px'}}>TaskTrack</span>
          </Menu.Item>
          <Link to='/dashboard'>
            <Menu.Item
              name='dashboard'
              active={activeItem === 'dashboard'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Link>
          <Link to='/profile'>
            <Menu.Item
              name='profile'
              active={activeItem === 'profile'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Link>
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={() => handleLogout()}
            />
          </Menu.Menu>
        </Menu>
    </div>
  )
}
