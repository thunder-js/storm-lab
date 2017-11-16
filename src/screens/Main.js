import React from 'react';
import { Text, Button, AsyncStorage } from 'react-native'
import { any, bool } from 'prop-types'
import { compose } from 'recompose'
import { withApollo } from 'react-apollo'
import ScreenWrapper from 'storm-common/src/components/ScreenWrapper'
import withIsAuthenticated from 'storm-auth/src/hocs/graphcool/with-is-authenticated'
import logout from 'storm-auth/src/logic/logout'
import { loadAuthScreen, loadOnboardingScreen } from '../navigation'


class Main extends React.Component {
  static propTypes = {
    authenticated: bool.isRequired,
    client: any.isRequired,
  }
  static navigatorStyle = {
    navBarHidden: true,
  }
  componentDidMount() {
    AsyncStorage.setItem('shouldGoToMain', 'YES')
  }

  handleLogout = async () => {
    const client = this.props.client
    await logout({ client })
    loadOnboardingScreen()
  }
  handleLogin = () => {
    loadAuthScreen()
  }

  render() {
    const {
      authenticated,
    } = this.props
    const button = authenticated
    ? (<Button
      title={authenticated ? 'Logout' : 'Login'}
      color="#F00"
      onPress={async () => {
      }}
    />)
    : (<Button
      title={authenticated ? 'Logout' : 'Login'}
      color="#F00"
      onPress={this.handleLogin}
    />)

    return (
      <ScreenWrapper style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Main!</Text>
        {button}
      </ScreenWrapper>
    )
  }
}

export default compose(
  withApollo,
  withIsAuthenticated,
)(Main)
