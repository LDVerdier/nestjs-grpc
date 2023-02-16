import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { UserById } from './interfaces/user-by-id.interface';
import { User } from './interfaces/user.interface';

@Controller()
export class UserController {
  @GrpcMethod('UserService')
  findOne(data: UserById): User {
    const users: User[] = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Leslie' },
    ];

    return users.find(({ id }) => id === data.id);
  }
}
