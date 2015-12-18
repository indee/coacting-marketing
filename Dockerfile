
FROM indee/wordpress:latest

ENV THEME_NAME coacting-marketing


WORKDIR /app/wp-content/themes/${THEME_NAME}

ADD package.json .
RUN npm install

ADD . .

RUN gulp build \
    && rm -rf ./node_modules

WORKDIR /app
