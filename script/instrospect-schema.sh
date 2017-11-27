#!/bin/bash

set -euxo pipefail

apollo-codegen introspect-schema https://api.graph.cool/relay/v1/cj9izddz55mvr0124usquqjl6 --output schema.json
