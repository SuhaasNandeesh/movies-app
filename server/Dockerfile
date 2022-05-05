#Dockerfile for Node Express Backend
FROM node:16.13.0

#Working directory
WORKDIR "/app"

#Install dependencies
COPY ./package*.json ./

RUN npm install

#Copy app source code
COPY . .

#Expose 5000
EXPOSE 5000

CMD ["npm", "run", "dev"]
