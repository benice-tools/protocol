export interface Prices {
  readonly [key: string]: string;
}

export interface PricesWithTimestamp {
  readonly prices: Prices;
  readonly timestamp: number;
}

export interface FromOrderChange {
  readonly asset: string;
  readonly change: number;
}

export interface Difference {
  readonly btc: number;
  readonly usd: number;
}

export interface BalanceDifference {
  readonly absolute: Difference;
  readonly percent: Difference;
}

export interface BalanceDifferenceWithTime {
  readonly change: BalanceDifference;
  readonly time: number;
}

export type PerDayBalanceDifference = ReadonlyArray<BalanceDifferenceWithTime>;

export interface PerDayStats {
  readonly perDay: PerDayBalanceDifference;
  readonly betweenTotal: BalanceDifference;
}

export interface ExtendExchangeOrder {
  readonly symbol: string;
  readonly side: string;
  readonly orderType: string;
  readonly quantity: number;
  readonly price: number;
  readonly stopPrice: number;
  readonly status: string;
  readonly orderId: string;
  readonly clientOrderId: string;
  readonly eventTime: number;
  readonly orderCreationTime: number;
  readonly minusAsset: string;
  readonly plusAsset: string;
  readonly commissionAsset: string;
  readonly commissionAmount: number;
}

export interface AssetShareWithChange {
  [asset:string]: {
    share: number,
    change: number
  };
}

export type SharesWithChange = ReadonlyArray<AssetShareWithChange>;
