FROM node:16-alpine

# Set working directory

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
# RUN npm install --production

# Copy the built application files
COPY ./.next /usr/share/nginx/html/
COPY ./public /usr/share/nginx/html/public
COPY ./.next/static /usr/share/nginx/html/_next/static
# Expose the desired port (e.g., 3000)
EXPOSE 3000

# Start the Node.js server
CMD ["node", "./.next/standalone/server.js"]
