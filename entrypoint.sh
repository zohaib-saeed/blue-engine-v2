#!/bin/sh

echo "Starting entrypoint script..."
# Replace environment variables in nginx.conf.template
envsubst '$CERTBOT_DOMAIN' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf

echo "envsubst completed. Ready for starting Nginx..."
# Don't start Nginx here; just prepare the configuration.
