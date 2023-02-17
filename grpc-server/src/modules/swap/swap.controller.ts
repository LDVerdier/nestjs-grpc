import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { LiquidityRequest } from './interfaces/liquidity-request.interface';
import { TradingPairListResponse } from './interfaces/trading-pair-list-response.interface';

@Controller()
export class SwapController {
  @GrpcMethod('SwapService')
  init({ tokens }: LiquidityRequest): TradingPairListResponse {
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
