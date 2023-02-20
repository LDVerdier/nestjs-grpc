import { Controller, Get, Inject, OnModuleInit, Query } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, toArray } from 'rxjs';
import { LiquidityRequest } from 'src/grpc/interfaces/swap/LiquidityRequest';
import { TradingPair__Output } from 'src/grpc/interfaces/swap/TradingPair';
import { TradingPairListResponse__Output } from 'src/grpc/interfaces/swap/TradingPairListResponse';

interface SwapService {
  init(data: LiquidityRequest): TradingPairListResponse__Output;
  liquidity(data: LiquidityRequest): Observable<TradingPair__Output>;
}

@Controller('swap')
export class SwapController implements OnModuleInit {
  constructor(@Inject('SWAP_PACKAGE') private readonly client: ClientGrpc) {}

  private swapService: SwapService;
  onModuleInit() {
    this.swapService = this.client.getService<SwapService>('SwapService');
  }

  @Get()
  init(
    @Query('tokens') commaSeparatedTokens: string,
  ): TradingPairListResponse__Output {
    const tokens = commaSeparatedTokens.split(',');

    return this.swapService.init({ tokens });
  }

  @Get('liquidity')
  liquidity(
    @Query('tokens') commaSeparatedTokens: string,
  ): Observable<TradingPair__Output[]> {
    const tokens = commaSeparatedTokens.split(',');
    const stream = this.swapService.liquidity({ tokens });

    return stream.pipe(toArray());
  }
}
