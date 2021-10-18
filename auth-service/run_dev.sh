#!/bin/sh

export NODE_ENV=development

yarn clean
cp -R src/keys dist/keys
cp -R src/public dist/public
node bin/unlockSecret.js development $1
yarn migrate-latest
yarn dev
