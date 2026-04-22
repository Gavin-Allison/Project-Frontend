FROM nginx:alpine

# Copy html to the default nginx path
COPY index.html /usr/share/nginx/html/index.html

# Frontend port
EXPOSE 80