interface Token {
  policy: string;
  name: string;
  amount: number;
}

interface TradingPair {
  a: Token;
  b: Token;
}

export interface TradingPairListResponse {
  pairs: TradingPair[];
}
