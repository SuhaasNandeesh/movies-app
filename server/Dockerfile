#Dockerfile for Node Express Backend
FROM node:16.13.0

#Working directory
WORKDIR "/app"

#Install dependencies
COPY ./package*.json ./

RUN npm install

#Copy app source code
COPY . .

EXPOSE 3000 27017

CMD ["npm", "run", "dev"]
