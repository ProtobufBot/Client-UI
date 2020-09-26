#!/usr/bin/env bash

npx pbjs -t static-module -w commonjs -o src/client/gen/proto.js  src/client/proto/http_dto.proto --force-long

npx pbts -o src/client/gen/proto.d.ts src/client/gen/proto.js
