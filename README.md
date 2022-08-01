# Chatter

Application for realtime chatting with registered users built with NodeJS, Express, Sequelize, WebSocket (Socket.io), React

## Features:
* Local Authentication using Email and Password
* Account Management (profile details, change avatar/personal data)
* Realtime chatting with users
* Sequelize & PostgreSQL database
* Storing images in Cloudinary
* Storing user sessions in Redis
* Using Redux (toolkit) for user interaction

## Screenshots:
#### Log In / Sign Up:
<img src="https://res.cloudinary.com/dluwizg51/image/upload/v1659337659/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-08-01_130709_yfoapn.png" width="49.5%" /> <img src="https://res.cloudinary.com/dluwizg51/image/upload/v1659337714/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2022-08-01_130825_cyxooo.png" width="49.5%" />

#### Settings:
![image](https://user-images.githubusercontent.com/92920845/182094101-dd7aa8e2-fa1d-4d63-af12-f9e7c179bc4e.png)
#### New Conversation:
![image](https://user-images.githubusercontent.com/92920845/182094664-2c30257c-bff0-4f11-a575-2f85fb7587c0.png)
#### Chat:
![image](https://user-images.githubusercontent.com/92920845/182095041-f803ad66-cd12-4822-bf8b-b5b02a3acbfd.png)


## Getting Started
### Prerequisites
* NodeJS, NPM (https://www.npmjs.com/get-npm)
* ReactJS (https://reactjs.org)
* Redis (https://redis.io)
* PostgreSQL (https://www.postgresql.org)
* Cloudinary (https://cloudinary.com)

### Installing
```bash
# Get the latest snapshot
git clone https://github.com/Bioneisme/nodejs-socket-react-chatapp.git
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

### Docker
Alternatively it is also possible to setup project through docker. To setup the container you have to checkout the repository and run the following command:
``` bash
docker-compose up
```
! Before setup by docker, make sure that you have configured .env files correctly
