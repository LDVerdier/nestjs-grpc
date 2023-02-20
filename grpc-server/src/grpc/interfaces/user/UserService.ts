// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { GreetRequest as _user_GreetRequest, GreetRequest__Output as _user_GreetRequest__Output } from '../user/GreetRequest';
import type { GreetResponse as _user_GreetResponse, GreetResponse__Output as _user_GreetResponse__Output } from '../user/GreetResponse';
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserById as _user_UserById, UserById__Output as _user_UserById__Output } from '../user/UserById';

export interface UserServiceClient extends grpc.Client {
  BidirectionalGreet(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_user_GreetRequest, _user_GreetResponse__Output>;
  BidirectionalGreet(options?: grpc.CallOptions): grpc.ClientDuplexStream<_user_GreetRequest, _user_GreetResponse__Output>;
  bidirectionalGreet(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_user_GreetRequest, _user_GreetResponse__Output>;
  bidirectionalGreet(options?: grpc.CallOptions): grpc.ClientDuplexStream<_user_GreetRequest, _user_GreetResponse__Output>;
  
  FindOne(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  FindOne(argument: _user_UserById, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, metadata: grpc.Metadata, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, options: grpc.CallOptions, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  findOne(argument: _user_UserById, callback: grpc.requestCallback<_user_User__Output>): grpc.ClientUnaryCall;
  
}

export interface UserServiceHandlers extends grpc.UntypedServiceImplementation {
  BidirectionalGreet: grpc.handleBidiStreamingCall<_user_GreetRequest__Output, _user_GreetResponse>;
  
  FindOne: grpc.handleUnaryCall<_user_UserById__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  BidirectionalGreet: MethodDefinition<_user_GreetRequest, _user_GreetResponse, _user_GreetRequest__Output, _user_GreetResponse__Output>
  FindOne: MethodDefinition<_user_UserById, _user_User, _user_UserById__Output, _user_User__Output>
}
