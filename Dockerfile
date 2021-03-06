FROM node:14-alpine3.10

ENV PORT 3000

WORKDIR /opt/www

COPY package*.json ./
COPY yarn.lock ./

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    && yarn

COPY . .

RUN yarn build

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]
