import { lifecycle, withProps } from 'recompose'
import withShouldGoToMain from '../../lib/storm-foundation/src/hocs/with-should-go-to-main'
import withFirstVisit from '../../lib/storm-foundation/src/hocs/with-first-visit'
import withIsAuthenticated from '../../lib/storm-auth/src/hocs/graphcool/with-is-authenticated'
import Waypoint from '../../lib/storm-foundation/src/components/Waypoint'
import decideNextScreen from '../../lib/storm-foundation/src/logic/decide-next-screen'
import Config from '../config'

export default compose(
  withShouldGoToMain,
  withFirstVisit,
  withIsAuthenticated,
  withProps({
    allowGuest: Config.allowGuest
  }),
  lifecycle({
    componentWillReceiveProps: decideNextScreen
  })
)(Waypoint)
