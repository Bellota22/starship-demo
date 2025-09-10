# Dockerfile.build
FROM node:20-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# usa exactamente el mismo comando que en prod
RUN npm run build
