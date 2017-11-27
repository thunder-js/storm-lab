/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type getRestaurantsQueryVariables = {|
  first?: ?number,
|};

export type getRestaurantsQuery = {|
  allRestaurants:  Array< {|
    __typename: "Restaurant",
    id: string,
    name: ?string,
  |} >,
|};