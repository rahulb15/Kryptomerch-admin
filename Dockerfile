FROM node:16.20.0-alpine
# Create app directory
WORKDIR /usr/src/marketplace-adminpanel
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --legacy-peer-deps
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 4000
CMD [“npm”, “start”]
