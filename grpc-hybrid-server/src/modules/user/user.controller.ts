import {
  Controller,
  Get,
  Inject,
  OnModuleInit,
  Param,
  Query,
} from '@nestjs/common';
import {
  ClientGrpc,
  GrpcMethod,
  GrpcStreamMethod,
} from '@nestjs/microservices';
import { Observable, ReplaySubject, Subject, toArray } from 'rxjs';
import {
  GreetRequest,
  GreetRequest__Output,
} from 'src/grpc/interfaces/user/GreetRequest';
import {
  GreetResponse,
  GreetResponse__Output,
} from 'src/grpc/interfaces/user/GreetResponse';
import { User, User__Output } from 'src/grpc/interfaces/user/User';
import { UserById, UserById__Output } from 'src/grpc/interfaces/user/UserById';

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

  @GrpcMethod('UserService')
  findOne(data: UserById__Output): User {
    const users: User[] = [
      { id: 1, name: 'User 1 hybrid' },
      { id: 2, name: 'User 2 hybrid' },
    ];

    return users.find(({ id }) => id === data.id);
  }

  @GrpcStreamMethod('UserService')
  bidirectionalGreet(
    greetRequests$: Observable<GreetRequest__Output>,
  ): Observable<GreetResponse> {
    const greetResponses$ = new Subject<GreetResponse>();

    const onNext = (greet: GreetRequest__Output) => {
      const item: GreetResponse = {
        reply: `hello ${greet.greeter} from hybrid`,
      };
      greetResponses$.next(item);
    };
    const onComplete = () => greetResponses$.complete();

    greetRequests$.subscribe({
      next: onNext,
      complete: onComplete,
    });

    return greetResponses$.asObservable();
  }
}
