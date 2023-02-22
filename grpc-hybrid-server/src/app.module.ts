import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/order/order.module';
import { SwapModule } from './modules/swap/swap.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [UserModule, OrderModule, SwapModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
