FROM node:18.13-alpine3.16
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]