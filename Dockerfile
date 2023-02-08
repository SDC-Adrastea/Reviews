FROM node:18

WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 3000

VOLUME [ "/app/node_modules" ]

CMD npm run server-dev

