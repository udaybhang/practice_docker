FROM node:9

WORKDIR /practice_docker

COPY . /practice_docker

RUN npm install

CMD ["node", "server.js"]