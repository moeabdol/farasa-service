FROM node:10.16.0

ENV NODE_ENV=development
ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt
COPY package*.json ./
RUN npm install && npm cache clean --force

WORKDIR /opt/app
COPY . .

CMD [ "node", "src/app.js" ]
