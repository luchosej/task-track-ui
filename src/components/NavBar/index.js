import React, { useState } from 'react'
import { Menu, Image } from 'semantic-ui-react'
import logo from 'assets/images/logo/taskTrackMinimalTrans.png'

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <div style={{ padding: '5px 10px'}}>
      <Menu pointing secondary color='blue'>
          <Menu.Item style={{ padding: '1px 20px 3px 0px'}}>
            <Image src={logo} size="mini" />
            <span style={{ fontSize: '17px'}}>TaskTrack</span>
          </Menu.Item>
          <Menu.Item
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={(e, { name }) => setActiveItem(name)}
          />
          <Menu.Item
            name='profile'
            active={activeItem === 'profile'}
            onClick={(e, { name }) => setActiveItem(name)}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={(e, { name }) => setActiveItem(name)}
            />
          </Menu.Menu>
        </Menu>
    </div>
  )
}
