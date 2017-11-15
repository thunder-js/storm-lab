import React from 'react';
import { Text, Button, AsyncStorage } from 'react-native'
import { withApollo } from 'react-apollo'
import { loadAuthScreen, loadOnboardingScreen } from '../../navigation'
import ScreenWrapper from '../../lib/storm-common/src/components/ScreenWrapper'
import withIsAuthenticated from '../../lib/storm-auth/src/hocs/graphcool/with-is-authenticated'
import logout from '../../lib/storm-auth/src/logic/logout'

class Main extends React.Component {
  static navigatorStyle = {
    navBarHidden: true,
  }
  componentDidMount() {
    AsyncStorage.setItem('shouldGoToMain', 'YES')
  }

  handleLogout = async ()=> {
    await logout({ client })
    loadOnboardingScreen()
  }
  handleLogin = () => {
    loadAuthScreen()
  }

  render() {
    const {
      authenticated,
      client,
    } = this.props
    const button = authenticate
    ? <Button
      title={authenticated ? 'Logout' : 'Login'}
      color="#F00"
      onPress={async () => {
      }}
    />
    : <Button
      title={authenticated ? 'Logout' : 'Login'}
      color="#F00"
      onPress={this.handleLogin}
    />
    
    return (
      <ScreenWrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main!</Text>
        {button}
      </ScreenWrapper>
    )
  }
}


export default withApollo(withIsAuthenticated(Main))
