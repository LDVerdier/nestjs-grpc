import { GrpcOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: GrpcOptions = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000', // in docker context, the 'localhost' keyword would not work
    package: ['user', 'order'],
    protoPath: [
      join(__dirname, './modules/user/user.proto'),
      join(__dirname, './modules/order/order.proto'),
    ],
  },
};
