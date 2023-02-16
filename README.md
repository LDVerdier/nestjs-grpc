# nestjs-grpc
Examples of gRPC client and server powered by Nestjs

## Overview
Illustrates how two nestjs applications can communicate through gRPC protocole. The client app listens to REST api endpoints that can be reached by consumers such as React web apps or desktop apps like Postman. It then forwards the requests to the server app through gRPC communication and sends back the response to the REST api requester.

## Install and run the apps
Install the dependencies

`docker-compose run client yarn`

`docker-compose run server yarn`

Start both applications

`docker-compose up`

Shutdown both applications

`docker-compose stop` or ctrl + C in the terminal running docker-compose
