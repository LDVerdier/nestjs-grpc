import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: 'server:5000', // 'server' keyword refers to the container name as defined in docker-compose.yml
    package: ['user', 'order'],
    protoPath: [
      join(__dirname, './modules/user/user.proto'),
      join(__dirname, './modules/order/order.proto'),
    ],
  },
};
