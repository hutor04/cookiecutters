FROM node:18-alpine AS frontbuilder
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build:dev

FROM busybox:1.35

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=frontbuilder /app/build .
EXPOSE 3000
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]