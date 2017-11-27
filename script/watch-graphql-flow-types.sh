#!/bin/bash
set -euxo pipefail

./script/instrospect-schema.sh
./script/graphql-flow-types.sh

while true; do
  watchman-wait ./src
  RESULT=$?
  if [[ $RESULT -ne 0 ]]; then
    break
  fi
  sleep 0.5
  ./script/graphql-flow-types.sh
done
