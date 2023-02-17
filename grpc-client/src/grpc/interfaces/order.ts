import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { OrderServiceClient as _order_OrderServiceClient, OrderServiceDefinition as _order_OrderServiceDefinition } from './order/OrderService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  order: {
    Order: MessageTypeDefinition
    OrderById: MessageTypeDefinition
    OrderService: SubtypeConstructor<typeof grpc.Client, _order_OrderServiceClient> & { service: _order_OrderServiceDefinition }
  }
}

