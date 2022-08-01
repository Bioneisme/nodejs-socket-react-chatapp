# Chatter

Application for chatting with registered users built with NodeJS, Express, Sequelize, WebSocket (Socket.io), React

## Features:
* Local Authentication using Email and Password
* Account Management (profile details, change avatar/personal data)
*


## Getting Started
### Prerequisites
* NodeJS, NPM (https://www.npmjs.com/get-npm)
* ReactJS (https://reactjs.org)
* Redis (https://redis.io)
* PostgreSQL (https://www.postgresql.org)
* Cloudinary (https://cloudinary.com/)

### Installing
```bash
# Get the latest snapshot
git clone https://github.com/Bioneisme/nodejs-socket-react-chatapp
```
``` bash
# Change directory
cd nodejs-socket-react-chatapp
```
``` bash
# Install dependencies in client side
cd client && npm install
# Install dependencies in socket side
cd socket && npm install
# Install dependencies in server side
cd server && npm install
```
In server create an .env file locally. You can duplicate .env.example and name the new copy .env. Adapt the variables to your needs.
``` bash
# After setting up .env start app
npm run start # in all project sides (client/server/socket)
# or npm run dev
```
