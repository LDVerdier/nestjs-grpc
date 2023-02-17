import { Controller, Get, Inject, OnModuleInit, Query } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { LiquidityRequest } from './interfaces/liquidity-request.interface';
import { TradingPairListResponse } from './interfaces/trading-pair-list-response.interface';

interface SwapService {
  init(data: LiquidityRequest): TradingPairListResponse;
}

@Controller('swap')
export class SwapController implements OnModuleInit {
  constructor(@Inject('SWAP_PACKAGE') private readonly client: ClientGrpc) {}

  private swapService: SwapService;
  onModuleInit() {
    this.swapService = this.client.getService<SwapService>('SwapService');
  }

  @Get()
  init(@Query('tokens') commaSeparatedTokens: string): TradingPairListResponse {
    const tokens = commaSeparatedTokens.split(',');

    return this.swapService.init({ tokens });
  }
}
