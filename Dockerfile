FROM maxmcd/deno:slim

COPY . /app

WORKDIR /app

CMD deno --allow-net --allow-env ./index.ts
