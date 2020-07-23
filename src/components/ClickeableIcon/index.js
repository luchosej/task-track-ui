import React from 'react'
import { Icon } from 'semantic-ui-react'

import './styles.scss'
export default function ClickeableIcon(props) {
  return (
    <div>
      <Icon className='clickeable-icon' {...props} />
    </div>
  )
}
