FROM node:16-alpine

ENV APP /app
RUN mkdir $APP
WORKDIR $APP

COPY package*.json ./

RUN npm config set unsafe-perm true

RUN npm install --force

COPY . .

EXPOSE 80

RUN chmod 777 /app/node_modules

CMD npm i express --save --user && npm run build && npm run start