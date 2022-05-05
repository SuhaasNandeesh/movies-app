#Docker for React client
#Build react client
FROM node:18-alpine3.14

#Working directory
WORKDIR "/app"

COPY ./package*.json ./

RUN npm install

#Copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
