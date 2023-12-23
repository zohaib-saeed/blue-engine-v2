#!/bin/sh

# Replace environment variables in nginx.conf.template
envsubst '$NGINX_HOST' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf

# Start Nginx in the foreground
exec nginx -g 'daemon off;'