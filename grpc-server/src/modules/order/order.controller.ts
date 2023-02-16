import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { OrderById } from './interfaces/order-by-id.interface';
import { Order } from './interfaces/order.interface';

@Controller()
export class OrderController {
  @GrpcMethod('OrderService')
  findOne(data: OrderById): Order {
    const orders: Order[] = [
      { id: 1, name: 'order 1' },
      { id: 2, name: 'order 2' },
    ];

    return orders.find(({ id }) => id === data.id);
  }
}
