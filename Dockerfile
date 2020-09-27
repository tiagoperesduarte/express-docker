FROM node:12.18-alpine

MAINTAINER Tiago Peres

COPY . /app

WORKDIR /app

RUN npm install

CMD ["npm", "run", "start"]
