# stage 1
FROM node:12.7.0-alpine as build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# stage 2
FROM nginx:alpine
COPY --from=build /app/dist/angu /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]

# docker build -t edf_angular .    to build the docker image
# docker run -it -p 8080:80 --name edf_angular edf_angular   to run the image
