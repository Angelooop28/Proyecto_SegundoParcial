FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 7878
ENTRYPOINT ["npm","start"]