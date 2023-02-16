import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { OrderById } from './interfaces/order-by-id.interface';
import { Order } from './interfaces/order.interface';

interface OrderService {
  findOne(data: OrderById): Order;
}

@Controller('order')
export class OrderController implements OnModuleInit {
  constructor(@Inject('ORDER_PACKAGE') private readonly client: ClientGrpc) {}

  private orderService: OrderService;
  onModuleInit() {
    this.orderService = this.client.getService<OrderService>('OrderService');
  }

  @Get(':id')
  getById(@Param('id') id: string): Order {
    return this.orderService.findOne({ id: +id });
  }
}
