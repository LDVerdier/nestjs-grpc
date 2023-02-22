import { Controller } from '@nestjs/common';
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable, Subject } from 'rxjs';
import { GreetRequest__Output } from 'src/grpc/interfaces/user/GreetRequest';
import { GreetResponse } from 'src/grpc/interfaces/user/GreetResponse';
import { User } from 'src/grpc/interfaces/user/User';
import { UserById__Output } from 'src/grpc/interfaces/user/UserById';

@Controller()
export class UserController {
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
