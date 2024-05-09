FROM node:20.13.0-slim

WORKDIR /code

COPY . ./

RUN yarn

