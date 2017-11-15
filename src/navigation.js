import { Navigation } from 'react-native-navigation'
const PK_NAME = 'br.com.tastefy'

export const AUTH_SCREEN = `${PKG_NAME}.Auth`
export const ONBOARDING_SCREEN = `${PKG_NAME}.Onboarding`
export const MAIN_SCREEN = `${PKG_NAME}.Main`
export const WAYPOINT_SCREEN = `${PKG_NAME}.Waypoint`
export const FIRST_TAB_SCREEN = `${PKG_NAME}.FirstTab`
export const SECOND_TAB_SCREEN = `${PKG_NAME}.SecondTab`

export const loadMainScreen = () => Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: FIRST_TAB_SCREEN,
      title: 'Screen One',
    },
    {
      label: 'Two',
      screen: SECOND_TAB_SCREEN,
      title: 'Screen Two',
    },
  ],
  animationType: 'fade',
});

export const loadOnboardingScreen = () => Navigation.startSingleScreenApp({
  screen: {
    screen: ONBOARDING_SCREEN, // unique ID registered with Navigation.registerScreen
  },
  animationType: 'fade', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});


export const loadAuthScreen = () => Navigation.showModal({
  screen: AUTH_SCREEN,
})

export const loadWaypoint = () => Navigation.startSingleScreenApp({
  screen: {
    screen: WAYPOINT_SCREEN, // unique ID registered with Navigation.registerScreen
  },
  animationType: 'slide-down', // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});
