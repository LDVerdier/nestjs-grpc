# nestjs-grpc
Examples of gRPC client and server powered by Nestjs

## Overview
Illustrates gRPC communication protocole implementations with nestjs.

The project containes three apps:
- `client` and `server` which must be launched together. The `client` app listens to REST api endpoints that can be reached by consumers such as React web apps or desktop apps like Postman. It then forwards the requests to the `server` app through gRPC communication and sends back the response to the REST api requester.
- `hybrid` which is meant to be launched alone or along with the `client` app. It exposes both REST api endpoints and gRPC endpoints. When hit on a REST endpoint, it internally queries the corresponding gRPC endpoint and seamlessly forwards the response back to the REST api request.

When launched together with the `client` app, the gRPC request url in the grpc-client-options of the `client` must be set to `'hybrid:5000'` to target the `hybrid` app.

## Install dependencies
Install the dependencies

`docker-compose run client yarn`

`docker-compose run server yarn`

`docker-compose run hybrid yarn`

## Generate interfaces based on protobuf files
Typescript cannot infer types from the .proto files. These types/interfaces must be generated whenever a `*.proto` file is added to the `src/grpc/proto/` directory. This can be done with the following commands: 

`docker-compose run client yarn proto:gen`

`docker-compose run server yarn proto:gen`

`docker-compose run hybrid yarn proto:gen`

[More information](https://github.com/grpc/proposal/blob/master/L70-node-proto-loader-type-generator.md) about this type generation.

## Run the apps
Start `client` and `server` applications

`docker-compose up client server`

Start `hybrid` application

`docker-compose up hybrid`

Shutdown all applications

`docker-compose stop` or ctrl + C in the terminal running docker-compose

## Test the data flow

### In client + server context
Among others, the gRPC-client exposes the following REST api endpoints:

`GET localhost:3000/user/<id>`

`GET localhost:3000/order/<id>`

where `<id>` is a number. At the time of writing this documentation, only `1` and `2` values will return something.

When hitting one of these endpoints with a client such as Postman, you should receive a response with basic data.

E.g. with `localhost:3000/user/1` request, you should receive response data looking like the following:

```JSON
{
	"id": 1,
	"name": "User 1"
}
```
### In hybrid context
Same as above with a different port:

`GET localhost:3002/user/<id>`

When writing this documentation, only the user REST endpoints are implemented in `hybrid` app.
