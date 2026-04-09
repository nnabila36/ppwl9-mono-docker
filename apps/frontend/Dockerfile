# ===========================
# Stage 1: Build Frontend
# ===========================
FROM --platform=linux/amd64 oven/bun:1 AS builder

WORKDIR /app

# Copy root dependencies
COPY package.json bun.lock ./

# Copy workspace dependencies
COPY apps/frontend/package.json ./apps/frontend/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies
RUN bun install

# Copy source code
COPY apps/frontend ./apps/frontend
COPY packages/shared ./packages/shared

# Build frontend
WORKDIR /app/apps/frontend
RUN bun run build

# ===========================
# Stage 2: Serve dengan nginx
# ===========================
FROM --platform=linux/amd64 nginx:alpine

# Copy hasil build frontend ke nginx html folder
COPY --from=builder /app/apps/frontend/dist /usr/share/nginx/html

# Copy konfigurasi nginx (jika ada)
COPY apps/frontend/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Command: print URL lalu jalankan nginx
CMD sh -c "echo '🖥️ Frontend → http://localhost:5173'; nginx -g 'daemon off;'"