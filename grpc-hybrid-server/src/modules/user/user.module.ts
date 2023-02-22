import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from 'src/grpc-client.options';
import { UserController } from './user.controller';
import { UserRestController } from './user.rest.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'USER_PACKAGE', ...grpcClientOptions }]),
  ],
  controllers: [UserController, UserRestController],
})
export class UserModule {}
