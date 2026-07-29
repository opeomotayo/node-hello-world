FROM node:alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Copy application source and tests
COPY . .

# Run tests during Docker build
RUN node --test

# Expose application port
EXPOSE 3000

# Start application
CMD ["node", "app.js"]
