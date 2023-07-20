# declare the base image
FROM node:18

# declare working directory
WORKDIR /server

# copy package.json file
COPY package.json ./

# install dependencies
RUN npm install

# copy files
COPY ./ ./

# run webpack build and server start
CMD ["npm", "run", "start"]