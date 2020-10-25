FROM node:alpine3.10

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8000

CMD [ "npm", "run", "start:prod" ]