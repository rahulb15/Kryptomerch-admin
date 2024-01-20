# Use the official Node.js image as the build environment
#FROM node:16 AS build-env
ARG NODE_VERSION=16
ARG ALPINE_VERSION=3.18

FROM node:${NODE_VERSION}-alpine${ALPINE_VERSION} AS node

FROM alpine:${ALPINE_VERSION} AS build-env

COPY --from=node /usr/lib /usr/lib
COPY --from=node /usr/local/lib /usr/local/lib
COPY --from=node /usr/local/include /usr/local/include
COPY --from=node /usr/local/bin /usr/local/bin

RUN node -v

#FROM alpine:3.18 AS build-env

# Set the working directory in the container
WORKDIR /usr/src/marketplace-admin

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# RUN npm install -g npm@latest
ENV REACT_APP_NETWORK_ID=mainnet01
ENV REACT_APP_CHAIN_ID=8
ENV REACT_APP_NODE_URL=https://goku-backend-production.up.railway.app/
# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# ENV NODE_OPTIONS="--max-old-space-size=4096"

# Build the React app
RUN npm run build

COPY . .
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
# EXPOSE 3000
# CMD ["npm", "start"]


# Stage 2: Smaller, final image
# FROM alpine:${ALPINE_VERSION}

# COPY --from=node /usr/lib /usr/lib
# COPY --from=node /usr/local/lib /usr/local/lib
# COPY --from=node /usr/local/include /usr/local/include
# COPY --from=node /usr/local/bin /usr/local/bin

FROM node:20.10.0-alpine3.19

RUN apk add --no-cache openssl=3.1.4-r3


# Install dependencies
RUN npm install -g npm@latest

# Install serve
RUN npm install -g serve

# Copy build files from builder stage
COPY --from=build-env /usr/src/marketplace-admin/build /usr/src/marketplace-admin/build

# Command to run the app
CMD ["serve", "-s", "/usr/src/marketplace-admin/build", "-l", "tcp://0.0.0.0:3000"]

# Expose the desired port
EXPOSE 3006
