FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy the built application files from the CI artifacts directory
COPY ./.next ./.next
COPY ./public ./public
COPY ./package.json ./package.json
COPY ./next.config.js ./next.config.js

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]