import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { LiquidityRequest__Output } from 'src/grpc/interfaces/swap/LiquidityRequest';
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
}
