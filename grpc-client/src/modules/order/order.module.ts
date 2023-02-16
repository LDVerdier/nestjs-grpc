import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../../grpc-client.options';
import { OrderController } from './order.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'ORDER_PACKAGE', ...grpcClientOptions }]),
  ],
  controllers: [OrderController],
})
export class OrderModule {}
