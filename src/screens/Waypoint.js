import { compose, lifecycle, withProps } from 'recompose'
import withShouldGoToMain from 'storm-foundation/src/hocs/with-should-go-to-main'
import withFirstVisit from 'storm-foundation/src/hocs/with-first-visit'
import withIsAuthenticated from 'storm-auth/src/hocs/graphcool/with-is-authenticated'
import Waypoint from 'storm-foundation/src/components/Waypoint'
import decideNextScreen from 'storm-foundation/src/logic/decide-next-screen'
import Config from '../config'

export default compose(
  withShouldGoToMain,
  withFirstVisit,
  withIsAuthenticated,
  withProps({
    allowGuest: Config.allowGuest,
  }),
  lifecycle({
    componentWillReceiveProps: decideNextScreen,
  }),
)(Waypoint)
