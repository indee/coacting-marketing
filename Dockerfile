FROM indee/wordpress:latest

ENV THEME_NAME coacting-marketing

RUN mkdir ${THEME_NAME}
WORKDIR /app/wp-content/themes/${THEME_NAME}

# Add Install node modules and bower components
ADD package.json
RUN npm install

# Add theme files
ADD . .

# Build
RUN gulp build \
    && rm -rf ./node_modules
