FROM node:alpine

WORKDIR /usr/src/app

RUN npm install pm2 -g
COPY package.json package-lock.json ./
RUN npm install

COPY . ./

CMD [ "pm2-runtime", "start", "./ecosystem.config.js" ]