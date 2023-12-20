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

ENV DEBUG=vite*

# Build the app
RUN pnpm run build

# Step 2: Serve the app using Nginx
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Custom nginx.conf that loads environment variables
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 is done in docker-compose.yml
CMD ["nginx", "-g", "daemon off;"]
