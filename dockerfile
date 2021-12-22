FROM node:16.13.0
WORKDIR /
COPY . .
RUN yarn install --production
CMD [ "node", "index.js" ]

