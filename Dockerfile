# ---- Build stage ----
FROM node:24-alpine AS build
WORKDIR /app

# Install dependencies first so they cache independently of source changes.
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
# SITE_URL is baked into sitemap/RSS/canonical links at build time.
ARG SITE_URL=https://example.com
ENV SITE_URL=$SITE_URL
RUN npm run build

# ---- Runtime stage ----
FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO /dev/null http://127.0.0.1/en/ || exit 1
