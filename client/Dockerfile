#Docker for React client
#Build react client
FROM node:10.16-alpine

#Working directory
WORKDIR /app

COPY package*.json ./

RUN npm install --silent

#Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm","start"]
