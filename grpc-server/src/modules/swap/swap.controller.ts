import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { LiquidityRequest__Output } from 'src/grpc/interfaces/swap/LiquidityRequest';
import { TradingPair } from 'src/grpc/interfaces/swap/TradingPair';
import { TradingPairListResponse } from 'src/grpc/interfaces/swap/TradingPairListResponse';

@Controller()
export class SwapController {
  @GrpcMethod('SwapService')
  init({ tokens }: LiquidityRequest__Output): TradingPairListResponse {
    const [firstToken, secondToken] = tokens;

    const pairs: TradingPairListResponse = {
      pairs: [
        {
          a: {
            amount: 500,
            name: firstToken,
            policy: `policy for ${firstToken}`,
          },
          b: {
            amount: 200,
            name: secondToken,
            policy: `policy for ${secondToken}`,
          },
        },
      ],
    };

    return pairs;
  }

  @GrpcMethod('SwapService')
  liquidity(data: LiquidityRequest__Output): Observable<TradingPair> {
    const tradingPairs$ = new Observable<TradingPair>((subscriber) => {
      data.tokens.forEach((token) => {
        const pair: TradingPair = {
          a: {
            name: token,
            amount: 1,
            policy: `policy for ${token}`,
          },
          b: {
            name: 'random token',
            amount: 2,
            policy: `policy for random token`,
          },
        };
        subscriber.next(pair);
      });
      subscriber.complete();
    });

    return tradingPairs$;
  }
}
