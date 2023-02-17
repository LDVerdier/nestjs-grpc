import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { User__Output } from 'src/grpc/interfaces/user/User';
import { UserById } from 'src/grpc/interfaces/user/UserById';

interface UserService {
  findOne(data: UserById): User__Output;
}

@Controller('user')
export class UserController implements OnModuleInit {
  constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc) {}

  private userService: UserService;
  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get(':id')
  getById(@Param('id') id: string): User__Output {
    return this.userService.findOne({ id: +id });
  }
}
