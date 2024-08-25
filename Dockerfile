# Step 1: Build the React application
FROM node:19 as build-stage
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY package*.json ./
COPY pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy source files
COPY . .

# Build the app
RUN pnpm build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine as production-stage

# Install envsubst (part of gettext) utility
RUN apk add --no-cache gettext

# Copy the built app to nginx html directory
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom nginx.conf template
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Expose port 80 is done in docker-compose.yml
CMD ["/entrypoint.sh"]
