import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'

export default function NavBar() {
  const [activeItem, setActiveItem] = useState('dashboard')

  return (
    <div>
      <Menu pointing secondary>
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
