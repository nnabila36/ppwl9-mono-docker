# Base image menggunakan bun
FROM --platform=linux/amd64 oven/bun:1 AS base

# Set working directory
WORKDIR /app

# ===========================
# Install dependencies
# ===========================

# Copy root dependencies
COPY package.json bun.lock ./

# Copy workspace dependencies
COPY apps/backend/package.json ./apps/backend/
COPY packages/shared/package.json ./packages/shared/

# Install dependencies dengan bun
RUN bun install

# ===========================
# Copy source code
# ===========================

COPY apps/backend ./apps/backend
COPY packages/shared ./packages/shared

# Masuk ke backend folder
WORKDIR /app/apps/backend

# ===========================
# Prisma setup
# ===========================

# Copy prisma schema (penting banget)
COPY apps/backend/prisma ./prisma

# Generate Prisma Client
RUN bunx prisma generate --schema=./prisma/schema.prisma

# ===========================
# Ports & CMD
# ===========================

EXPOSE 3000

# Jalankan server backend
CMD ["bun", "run", "src/index.ts"]