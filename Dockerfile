FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
RUN npm install -g http-serve

# Bundle app source
COPY . .

# Build and optimize the react app
RUN npm run build ${NODE_ENV}

# Expose port 5000 on the host
EXPOSE 5000

CMD ["npm", "run", "start:prod"]
