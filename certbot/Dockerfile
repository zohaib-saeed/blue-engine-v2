# Use the `certbot/certbot` image
FROM certbot/certbot

# Copy the init script to a location in the container
COPY ./init-letsencrypt.sh /init-letsencrypt.sh

# Modify the permissions of the script
RUN chmod +x /init-letsencrypt.sh
