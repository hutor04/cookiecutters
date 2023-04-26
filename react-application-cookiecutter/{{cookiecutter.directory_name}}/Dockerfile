FROM node:16-alpine AS frontbuilder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM busybox:1.35

RUN adduser -D static
USER static
WORKDIR /home/static

COPY --from=frontbuilder /app/build .
EXPOSE 3000
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]