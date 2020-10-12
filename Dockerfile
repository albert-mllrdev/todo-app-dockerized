FROM node:alpine AS builder

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

# EXPOSE 4200

# CMD ["npm", "start"]

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/* /usr/share/nginx/html/

