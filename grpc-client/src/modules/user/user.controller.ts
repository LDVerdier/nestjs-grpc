import {
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Query,
} from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, ReplaySubject, toArray } from 'rxjs';
import { GreetRequest } from 'src/grpc/interfaces/user/GreetRequest';
import { GreetResponse__Output } from 'src/grpc/interfaces/user/GreetResponse';
import { User__Output } from 'src/grpc/interfaces/user/User';
import { UserById } from 'src/grpc/interfaces/user/UserById';

interface UserService {
  findOne(data: UserById): User__Output;
  bidirectionalGreet(
    data: Observable<GreetRequest>,
  ): Observable<GreetResponse__Output>;
}

@Controller('user')
export class UserController implements OnModuleInit {
  constructor(@Inject('USER_PACKAGE') private readonly client: ClientGrpc) {}

  private userService: UserService;
  onModuleInit() {
    this.userService = this.client.getService<UserService>('UserService');
  }

  @Get('greet')
  greet(
    @Query('greeters') commaSeparatedGreeters: string,
  ): Observable<GreetResponse__Output[]> {
    const greetRequests$ = new ReplaySubject<GreetRequest>(2);
    const greeters = commaSeparatedGreeters.split(',');
    greeters.forEach((greeter) => {
      greetRequests$.next({ greeter });
    });

    greetRequests$.complete();
    const stream = this.userService.bidirectionalGreet(greetRequests$);

    return stream.pipe(toArray());
  }

  @Get(':id')
  getById(@Param('id') id: string): User__Output {
    return this.userService.findOne({ id: +id });
  }
}
