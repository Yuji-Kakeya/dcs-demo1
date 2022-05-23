FROM node:latest
COPY ./package*.json ./
RUN ["npm", "install"]
COPY ./*.js ./
ENTRYPOINT ["node", "index.js"]


