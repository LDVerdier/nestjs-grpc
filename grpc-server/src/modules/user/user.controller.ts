import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { User } from 'src/grpc/interfaces/user/User';
import { UserById__Output } from 'src/grpc/interfaces/user/UserById';

@Controller()
export class UserController {
  @GrpcMethod('UserService')
  findOne(data: UserById__Output): User {
    const users: User[] = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ];

    return users.find(({ id }) => id === data.id);
  }
}
