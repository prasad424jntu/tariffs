FROM node:8.13-alpine

# Create app directory
WORKDIR /usr/src/app

COPY . /usr/src/app
COPY package*.json ./

RUN npm install

EXPOSE 3001
CMD [ "npm", "run", "start" ]