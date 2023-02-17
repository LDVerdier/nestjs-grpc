# nestjs-grpc
Examples of gRPC client and server powered by Nestjs

## Overview
Illustrates how two nestjs applications can communicate through gRPC protocole. The client app listens to REST api endpoints that can be reached by consumers such as React web apps or desktop apps like Postman. It then forwards the requests to the server app through gRPC communication and sends back the response to the REST api requester.

## Install dependencies
Install the dependencies

`docker-compose run client yarn`

`docker-compose run server yarn`

## Generate interfaces based on protobuf files
Typescript cannot infer types from the .proto files. These types/interfaces must be generated whenever a `*.proto` file is added to the `src/grpc/proto/` directory. This can be done with the following commands: 

`docker-compose run client yarn proto:gen`

`docker-compose run server yarn proto:gen`

[More information](https://github.com/grpc/proposal/blob/master/L70-node-proto-loader-type-generator.md) about this type generation.

## Run the apps
Start both applications

`docker-compose up`

Shutdown both applications

`docker-compose stop` or ctrl + C in the terminal running docker-compose

## Test the data flow
Among others, the gRPC-client exposes the following REST api endpoints:

`GET localhost:3000/user/<id>`

`GET localhost:3000/order/<id>`

where `<id>` is a number. At the time of writing this documentation, only `1` and `2` values will return something.

When hitting one of these endpoints with a client such as Postman, you should receive a response with basic data.

E.g. with `localhost:3000/user/1` request, you should receive the following response data:

```JSON
{
	"id": 1,
	"name": "User 1"
}
```