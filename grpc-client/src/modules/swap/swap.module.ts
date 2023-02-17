import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { grpcClientOptions } from '../../grpc-client.options';
import { SwapController } from './swap.controller';

@Module({
  imports: [
    ClientsModule.register([{ name: 'SWAP_PACKAGE', ...grpcClientOptions }]),
  ],
  controllers: [SwapController],
})
export class SwapModule {}
