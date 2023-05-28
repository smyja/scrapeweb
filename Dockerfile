# Production environment
FROM nginx:1.13.9-alpine

# Remove default Nginx configuration
RUN rm -rf /etc/nginx/conf.d

# Create new Nginx configuration directory
RUN mkdir -p /etc/nginx/conf.d

# Set appropriate permissions for the app directory
RUN chmod -R 755 /usr/share/nginx/html/.next/server/app

# Copy Nginx configuration file
COPY ./default.conf /etc/nginx/conf.d/

# Copy built application files
COPY ./.next/server/pages /usr/share/nginx/html
COPY ./.next/server/app /usr/share/nginx/html
COPY ./public /usr/share/nginx/html/public
COPY ./.next/static /usr/share/nginx/html/_next/static

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
