FROM node:14-alpine

# Set working directory


# Copy the built application files from the CI artifacts directory
COPY ./.next ./.next
COPY ./public ./public
COPY ./node_modules ./node_modules
COPY ./package.json ./package.json
COPY ./next.config.js ./next.config.js
COPY ./dist ./dist

# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]