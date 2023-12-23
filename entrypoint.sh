#!/bin/sh

echo "Starting entrypoint script..."

# Replace environment variables in nginx.conf.template
echo "Running envsubst..."
envsubst '$CERTBOT_DOMAIN' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf

echo "envsubst completed. Starting Nginx..."
# Start Nginx in the foreground
exec nginx -g 'daemon off;'
