import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Order__Output } from 'src/grpc/interfaces/order/Order';
import { OrderById } from 'src/grpc/interfaces/order/OrderById';

interface OrderService {
  findOne(data: OrderById): Order__Output;
}

@Controller('order')
export class OrderController implements OnModuleInit {
  constructor(@Inject('ORDER_PACKAGE') private readonly client: ClientGrpc) {}

  private orderService: OrderService;
  onModuleInit() {
    this.orderService = this.client.getService<OrderService>('OrderService');
  }

  @Get(':id')
  getById(@Param('id') id: string): Order__Output {
    return this.orderService.findOne({ id: +id });
  }
}
