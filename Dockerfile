FROM oven/bun:1.3.11-alpine

RUN apk add --no-cache git

WORKDIR /documentation

CMD ["bun", "vitepress", "dev", "--host"]
