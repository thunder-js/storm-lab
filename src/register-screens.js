import { Navigation } from 'react-native-navigation';
import { ApolloProvider } from 'react-apollo';
import {
  AUTH_SCREEN,
  ONBOARDING_SCREEN,
  MAIN_SCREEN,
  WAYPOINT_SCREEN,
  FIRST_TAB_SCREEN,
  SECOND_TAB_SCREEN,
} from './navigation'

import MainScreen from './screens/Main'
import AuthScreen from './screens/Auth'
import OnboardingScreen from './screens/Onboarding'
import WaypointScreen from './screens/Waypoint'

export default ({ reduxStore, apolloClient }) => {
  Navigation.registerComponent(ONBOARDING_SCREEN, () => OnboardingScreen, reduxStore, ApolloProvider, { client: apolloClient });
  Navigation.registerComponent(AUTH_SCREEN, () => AuthScreen, reduxStore, ApolloProvider, { client: apolloClient });
  Navigation.registerComponent(WAYPOINT_SCREEN, () => WaypointScreen, reduxStore, ApolloProvider, { client: apolloClient });
  Navigation.registerComponent(MAIN_SCREEN, () => MainScreen, reduxStore, ApolloProvider, { client: apolloClient });
  Navigation.registerComponent(FIRST_TAB_SCREEN, () => MainScreen, reduxStore, ApolloProvider, { client: apolloClient });
  Navigation.registerComponent(SECOND_TAB_SCREEN, () => MainScreen, reduxStore, ApolloProvider, { client: apolloClient });
};