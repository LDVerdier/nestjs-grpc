import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'server:5000', // 'server' keyword refers to the container name as defined in docker-compose.yml
    package: ['user', 'order', 'swap'],
    protoPath: [
      join(__dirname, './grpc/proto/user.proto'),
      join(__dirname, './grpc/proto/order.proto'),
      join(__dirname, './grpc/proto/swap.proto'),
    ],
  },
};
