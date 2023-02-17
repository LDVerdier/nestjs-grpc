// Original file: src/grpc/proto/order.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Order as _order_Order, Order__Output as _order_Order__Output } from '../order/Order';
import type { OrderById as _order_OrderById, OrderById__Output as _order_OrderById__Output } from '../order/OrderById';

export interface OrderServiceClient extends grpc.Client {
  FindOne(argument: _order_OrderById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _order_OrderById, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _order_OrderById, options: grpc.CallOptions, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _order_OrderById, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _order_OrderById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _order_OrderById, metadata: grpc.Metadata, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _order_OrderById, options: grpc.CallOptions, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  findOne(argument: _order_OrderById, callback: grpc.requestCallback<_order_Order__Output>): grpc.ClientUnaryCall;
  
}

export interface OrderServiceHandlers extends grpc.UntypedServiceImplementation {
  FindOne: grpc.handleUnaryCall<_order_OrderById__Output, _order_Order>;
  
}

export interface OrderServiceDefinition extends grpc.ServiceDefinition {
  FindOne: MethodDefinition<_order_OrderById, _order_Order, _order_OrderById__Output, _order_Order__Output>
}
