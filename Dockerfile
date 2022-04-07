# specify base image 
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json file in the working directory
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# copy every code files into current working directory of the image
COPY . ./

# expose the port
EXPOSE 3000

# start the application
CMD ["npm", "start"]