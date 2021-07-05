FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app
COPY . .
RUN pwd
RUN ls -l

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

# ENV APPID=$appid

EXPOSE 3000
CMD [ "npm", "start" ]

# docker build -t demoapp1 .
# docker ps --format "table {{.ID}}\t{{.Status}}\t{{.Names}}"    
