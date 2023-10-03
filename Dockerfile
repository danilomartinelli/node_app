FROM node:20

WORKDIR /usr/src/app

COPY wait-for-it.sh /usr/wait-for-it.sh

RUN chmod +x /usr/wait-for-it.sh

COPY package*.json ./

RUN npm install

COPY . .

CMD ["/usr/wait-for-it.sh", "mysql:3306", "--", "node", "index.js"]
