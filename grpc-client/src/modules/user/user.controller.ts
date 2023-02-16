import { Controller, Get, Inject, OnModuleInit, Param } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { UserById } from './interfaces/user-by-id.interface';
import { User } from './interfaces/user.interface';

interface UserService {
  findOne(data: UserById): User;
}

@Controller('user')
export class UserController implements OnModuleInit {
  constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc) {}

  private userService: UserService;
  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get(':id')
  getById(@Param('id') id: string): User {
    return this.userService.findOne({ id: +id });
  }
}
