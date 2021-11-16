ARG VARIANT=17-bullseye
FROM node:${VARIANT}

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm i

COPY . .

CMD [ "npm", "run", "start" ]
