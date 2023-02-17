import { Controller, Get, Inject, OnModuleInit, Query } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { LiquidityRequest } from 'src/grpc/interfaces/swap/LiquidityRequest';
import { TradingPairListResponse__Output } from 'src/grpc/interfaces/swap/TradingPairListResponse';

interface SwapService {
  init(data: LiquidityRequest): TradingPairListResponse__Output;
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
}
