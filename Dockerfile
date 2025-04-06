FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "dev"]



# FROM node:22-alpine
# WORKDIR /app

# # Copy package manager files first for caching
# COPY pnpm-lock.yaml .
# COPY package.json .

# # Install pnpm and dependencies
# RUN npm install -g pnpm && pnpm install --frozen-lockfile

# # Copy the rest of the app
# COPY . .

# # Build the Next.js project
# RUN pnpm build

# # Expose port
# ENV NODE_ENV=development
# ENV PORT=3000
# EXPOSE 3000

# # Run dev server
# CMD ["pnpm", "dev"]
