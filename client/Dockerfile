FROM node:16.14.2 AS Production

ENV NODE_ENV=production

WORKDIR usr/src/client

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]