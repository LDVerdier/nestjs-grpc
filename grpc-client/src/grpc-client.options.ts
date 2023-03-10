import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'server:5000', // 'server'|'hybrid' keyword refers to the container name as defined in docker-compose.yml
    package: ['user', 'order', 'swap'],
    protoPath: [
      join(__dirname, '../proto/user.proto'),
      join(__dirname, '../proto/order.proto'),
      join(__dirname, '../proto/swap.proto'),
    ],
    loader: {
      longs: Number,
    },
  },
};
