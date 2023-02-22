import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000', // in docker context, the 'localhost' keyword would not work
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
