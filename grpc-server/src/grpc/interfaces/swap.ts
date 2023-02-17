import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { SwapServiceClient as _swap_SwapServiceClient, SwapServiceDefinition as _swap_SwapServiceDefinition } from './swap/SwapService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  swap: {
    LiquidityRequest: MessageTypeDefinition
    SwapRequest: MessageTypeDefinition
    SwapResponse: MessageTypeDefinition
    SwapService: SubtypeConstructor<typeof grpc.Client, _swap_SwapServiceClient> & { service: _swap_SwapServiceDefinition }
    Token: MessageTypeDefinition
    TradingPair: MessageTypeDefinition
    TradingPairListResponse: MessageTypeDefinition
    TxHashRequest: MessageTypeDefinition
    TxIn: MessageTypeDefinition
    TxOut: MessageTypeDefinition
    TxStatus: EnumTypeDefinition
    TxStatusResponse: MessageTypeDefinition
    UTxO: MessageTypeDefinition
  }
}

