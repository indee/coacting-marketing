
FROM indee/wordpress:latest

WORKDIR /app/wp-content/themes/${THEME_NAME}

ADD package.json
RUN npm install

ADD . .

RUN gulp build \
    && rm -rf ./node_modules

WORKDIR /app
