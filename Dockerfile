FROM node:16-alpine

# Set working directory


# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies


# Copy the built application files
COPY ./dist ./dist
COPY ./dist ./.next
COPY ./public ./public
COPY ./dist/static ./_next/static
COPY ./node_modules ./node_modules
# Expose the desired port (e.g., 3000)

EXPOSE 3000

# Start the Node.js server
CMD ["npm", "run", "start"]
