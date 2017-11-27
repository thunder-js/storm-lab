#!/bin/bash

set -euxo pipefail

apollo-codegen introspect-schema https://api.graph.cool/simple/v1/cj9izddz55mvr0124usquqjl6 --output src/schema.json
# Flow
apollo-codegen generate src/**/*.js --schema src/schema.json --target flow --output src/operation-result-types.flow.js --addTypename
