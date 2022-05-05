#Dockerfile for Node Express Backend
FROM node:10.16-alpine

#Create app directory
RUN mkdir -p /app
WORKDIR /app

#Install dependencies
COPY package*.json ./

RUN npm install --silent

#Copy app source code
COPY . .

#Expose 5000
EXPOSE 5000

CMD ["npm","start"]
