FROM node:10.15.2 as build
COPY . /l-anticards
WORKDIR /l-anticards
RUN npm install --only=production
RUN npm run build

FROM nginx:alpine
LABEL maintainer="kan <kan_pro@outlook.com>"
RUN rm -rf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /l-anticards/build /usr/share/nginx/html/

EXPOSE 80
