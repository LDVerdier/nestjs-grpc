import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Order } from 'src/grpc/interfaces/order/Order';
import { OrderById__Output } from 'src/grpc/interfaces/order/OrderById';

@Controller()
export class OrderController {
  @GrpcMethod('OrderService')
  findOne(data: OrderById__Output): Order {
    const orders: Order[] = [
      { id: 1, name: 'order 1' },
      { id: 2, name: 'order 2' },
    ];

    return orders.find(({ id }) => id === data.id);
  }
}
