FROM node:jod

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Clone game source code
RUN git clone https://github.com/fox27374/pacman.git .

# Install app dependencies
RUN npm install
RUN npm install @splunk/otel

# Expose port 8080
EXPOSE 8080

# Run container
CMD ["npm", "start"]
