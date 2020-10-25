FROM nginx:1.19.0

RUN rm -rf /etc/nginx/conf.d

COPY conf /etc/nginx

COPY build/ /usr/share/nginx/html