# Production environment
FROM nginx:1.13.9-alpine
RUN rm -rf /etc/nginx/conf.d
RUN mkdir -p /etc/nginx/conf.d
COPY ./default.conf /etc/nginx/conf.d/
COPY ./.next/standalone/.next/server/pages /usr/share/nginx/html
COPY ./public /usr/share/nginx/html/public
COPY ./.next/static /usr/share/nginx/html/_next/static
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
