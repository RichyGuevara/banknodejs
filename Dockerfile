FROM 14.16.1-alpine3.10

#run ejecutar un comando..
RUN mkdir /code

COPY . /code

#directiva para ir a una carpeta y los comandos subsiguientes se hacen en esa ubicacion..
WORKDIR /code

RUN npm i

CMD node index.js
