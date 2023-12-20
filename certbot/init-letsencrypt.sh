#!/bin/sh

if [ -d "/etc/letsencrypt/live/${CERTBOT_DOMAIN}" ]; then
    echo "Certificate for ${CERTBOT_DOMAIN} already exists."
else
    echo "Certificate for ${CERTBOT_DOMAIN} not found."
    echo "Obtaining a new certificate..."
    certbot certonly --webroot --webroot-path=/var/www/html --agree-tos --no-eff-email --email "${CERTBOT_EMAIL}" -d "${CERTBOT_DOMAIN}"
fi

echo "Starting periodic certificate renewal..."
sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h & wait ${!}; done;'
