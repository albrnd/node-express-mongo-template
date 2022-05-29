FROM node:16

WORKDIR /src

COPY package.json ./

RUN yarn install

COPY . /src

Expose 4000

CMD ["yarn", "start"]