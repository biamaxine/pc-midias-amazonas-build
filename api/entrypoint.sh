#!/bin/bash

yarn install --prod

yarn prisma generate
yarn prisma migrate deploy

node dist/main.js