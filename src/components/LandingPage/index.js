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
    console.log(token)
    if (token)
      history.push('/dashboard')
  })

  return (
    <div className="landing">
      <Image className="login__logo" src={logo} size="medium" />
      <h1>Welcome to TaskTrack!</h1>
      <h2>Create. Track. Success.</h2>
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
