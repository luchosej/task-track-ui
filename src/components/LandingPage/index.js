import React, { useEffect } from 'react'
import { Image, Button, Icon } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { AuthenticationService } from 'services'

import logo from 'assets/images/logo/taskTrackLogo.png'
import './styles.scss'

export default function LandingPage() {
  const history = useHistory()

  useEffect(() => {
    const token = AuthenticationService.getToken()
    if (token)
      history.push('/dashboard')
  })

  return (
    <div className="landing">
      <Image className="landing__logo" src={logo} size="medium" />
      <h1 className="landing__title">Welcome to TaskTrack!</h1>
      <p className="landing__text">The track tracker tool you'll enjoy using. Keep your tasks organized easily and efficiently.</p>
      <h2 className="landing__legend">Create. Track. Success.</h2>
      <div className="landing__buttons">
        <Button color='green' inverted animated onClick={() => history.push('/signup')}>
          <Button.Content visible>Sign up</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
        <Button color='blue' inverted animated onClick={() => history.push('/login')}>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='arrow right' />
          </Button.Content>
        </Button>
      </div>
    </div>
  )
}
