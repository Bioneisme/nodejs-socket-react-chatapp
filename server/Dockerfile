FROM node:16.14.0 AS Production

ENV NODE_ENV=production

WORKDIR usr/src/server

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"]