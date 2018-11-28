FROM node:11

RUN echo '🐳 => Building e-Commerce List...'
# Create app directory
WORKDIR /usr/src/ecommerce

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
ENV PATH /opt/node_modules/.bin:$PATH

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
RUN echo '🐳 => e-Commerce container built! ✅'
