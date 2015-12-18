FROM indee/wordpress-build-tools

WORKDIR /app/wp-content/themes/coacting-marketing

ADD package.json \
    ./
RUN npm install

ADD . .

RUN gulp build \
    && rm -rf ./node_modules

WORKDIR /app/wp-content/plugins

RUN rm -rf akismet \
    && rm hello.php


# Plugins
ADD https://downloads.wordpress.org/plugin/custom-post-type-ui.zip \
    https://downloads.wordpress.org/plugin/advanced-custom-fields.zip \
    https://downloads.wordpress.org/plugin/wp-mail-smtp.zip \
    https://downloads.wordpress.org/plugin/wordpress-seo.zip \
    https://downloads.wordpress.org/plugin/cloudflare-flexible-ssl.zip \
    https://downloads.wordpress.org/plugin/two-factor-auth.zip \
    https://downloads.wordpress.org/plugin/backwpup.zip \
    https://downloads.wordpress.org/plugin/wp-robots-txt.zip \
    https://downloads.wordpress.org/plugin/reorder-post-within-categories.zip \
    https://downloads.wordpress.org/plugin/formidable.zip \
    https://dl.dropboxusercontent.com/u/528245/wordpress-plugins/wp-migrate-db-pro-media-files-1.4.1.zip \
    https://dl.dropboxusercontent.com/u/528245/wordpress-plugins/wp-migrate-db-pro-1.5.3.zip \
    ./

RUN unzip -o "./*.zip" \
    && rm *.zip
