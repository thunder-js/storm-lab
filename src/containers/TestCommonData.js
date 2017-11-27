//  @flow
/* eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }] */
import * as React from 'react'
import { View, Text, FlatList, Button } from 'react-native'
import { enhancedGraphql, withApolloFetchActions, withApolloFetchState, withError, withLoading, withPlaceholder, type FetchActions, type FetchState } from 'common-data/src/hocs'
import { compose, type HOC } from 'recompose'
import { graphql, type QueryProps } from 'react-apollo'
import gql from 'graphql-tag'
import type { OperationComponent } from 'react-apollo';
import type { getRestaurantsQuery } from '../operation-result-types.flow'

const ALL_RESTAURANTS_QUERY = gql`
  query getRestaurants($first: Int) {
    allRestaurants (first: $first){
      id
      name
    }
  }`

const Loading = (_): React.Element<any> => (
  <View>
    <Text>Im loading!</Text>
  </View>

)
type PlaceholderProps = {
  message: string
}
const Placeholder = ({
  message,
  fetchActions,
}: PlaceholderProps & FetchActions) => (
  <View>
    <Button
      title="REFETCH"
      onPress={() => fetchActions.refetch()}
    />
    <Text>Im a placeholder!</Text>
    <Text>{message}</Text>
  </View>

)

type DisplayErrorProps = {
  error: {
    description: string
  }
}
const DisplayError = ({ error }: DisplayErrorProps) => (
  <View>
    <Text>Im an error!</Text>
    <Text>{error && error.description}</Text>
  </View>

)

type Props = {
  data: QueryProps & getRestaurantsQuery,
  restaurants?: Array<{|
    __typename: 'Restaurant',
    id: string,
    name: ?string
  |}>
}

type OuterComponentProps = FetchState & FetchActions & Props

const OuterComponent = ({ fetchState, fetchActions, restaurants, data }: OuterComponentProps) => (
  <View style={{ flex: 1 }}>
    <MyComponent
      fetchState={fetchState}
      fetchActions={fetchActions}
      restaurants={restaurants}
      data={data}
    />
    <Text>initialLoading: {fetchState.initialLoading ? 'SIM' : 'Não'}</Text>
    <Text>activelyRefetching: {fetchState.activelyRefetching ? 'SIM' : 'Não'}</Text>
    <Text>passivelyRefetching: {fetchState.passivelyRefetching ? 'SIM' : 'Não'}</Text>
    <Text>fetchingMore: {fetchState.fetchingMore ? 'SIM' : 'Não'}</Text>
  </View>

)

type MyComponentProps = FetchActions & FetchState & Props

const MyComponent = (props: MyComponentProps) => (
  <View style={{ flex: 1 }}>
    <FlatList
      style={{ backgroundColor: '#d3d3d3', flex: 1 }}
      data={props.restaurants}
      onRefresh={props.fetchActions.refetch}
      refreshing={props.fetchState.activelyRefetching}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={item => item.id}
    />
    <Button
      title="FETCH MORE"
      onPress={() => props.fetchActions.refetch()}
    />
  </View>
)


const mapResultsToProps = (props): Props => ({
  ...props,
  restaurants: props.data.allRestaurants,
})

const mapPropsToOptions = _ => ({
  notifyOnNetworkStatusChange: true,
  variables: {
    first: 10,
  },
})


const withRestaurants = (): OperationComponent<getRestaurantsQuery, any, Props> => enhancedGraphql(ALL_RESTAURANTS_QUERY, {
  props: mapResultsToProps,
  options: mapPropsToOptions,
}, {
  LoadingComponent: Loading,
  PlaceholderComponent: Placeholder,
  ErrorComponent: DisplayError,
}, {
  isEmpty: props => !props.restaurants || props.restaurants.length === 0,
})


// const enhance = compose(
//   withRestaurants(),
//   // withApolloFetchState(),
//   // withApolloFetchActions(),
//   // withLoading(props => props.fetchState.initialLoading, Loading),
//   // withPlaceholder(props => !props.restaurants || props.restaurants.length === 0, props => <Placeholder message="Add more things!!" {...props} />),
//   // withError(props => props.error, DisplayError),
// )

export default withRestaurants()(OuterComponent)
