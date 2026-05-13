FROM node:26-alpine3.23 AS base

RUN apk add --no-cache git
RUN npm install --global pnpm@^11.1.0

WORKDIR /documentation

CMD ["pnpm", "vitepress", "dev", "--host"]
