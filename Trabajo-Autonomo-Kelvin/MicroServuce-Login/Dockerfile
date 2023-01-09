FROM node
COPY . /var/www
WORKDIR /var/www
RUN npm install
EXPOSE 5689
ENTRYPOINT ["npm","start"]