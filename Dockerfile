FROM node:25-alpine3.23

RUN apk add --no-cache git
RUN npm install --global pnpm@^10.27.0

WORKDIR /documentation

CMD ["pnpm", "vitepress", "dev", "--host"]
