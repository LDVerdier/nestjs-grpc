// Original file: proto/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { User as _user_User, User__Output as _user_User__Output } from '../user/User';
import type { UserById as _user_UserById, UserById__Output as _user_UserById__Output } from '../user/UserById';

export interface UserServiceClient extends grpc.Client {
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
  FindOne: grpc.handleUnaryCall<_user_UserById__Output, _user_User>;
  
}

export interface UserServiceDefinition extends grpc.ServiceDefinition {
  FindOne: MethodDefinition<_user_UserById, _user_User, _user_UserById__Output, _user_User__Output>
}
