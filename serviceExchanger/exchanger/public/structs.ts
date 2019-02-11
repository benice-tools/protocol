import { SharesWithChange } from "../../../serviceStatistics/public/structs";

export interface Balance {
  readonly asset: string;
  readonly free: number;
  readonly locked: number;
  readonly total: number;
}

export type Balances = ReadonlyArray<Balance>;

export interface BalancesWithTime {
  readonly balances: Balances;
  readonly time: number;
}

export interface ExtendedBalance {
  readonly asset: string;
  readonly free: number;
  readonly locked: number;
  readonly total: number;
  readonly btcPrice: number;
  readonly usdPrice: number;
  readonly btcSum: number;
  readonly usdSum: number;
  readonly usdDivisionPercent: number;
  readonly usdChangePercent: number;
  readonly btcChangePercent: number;
}

export type ExtendedBalances = ReadonlyArray<ExtendedBalance>;

export interface ExtendedBalanceWithTotal {
  balances: ExtendedBalances;
  readonly totalUSDT: number;
  readonly totalBTC: number;
}

export interface AccountInfo {
  readonly balances: Balances;
  readonly time: number;
  readonly canTrade: boolean;
}

export enum SupportedExchanges {
  Binance = "Binance"
}

export const REBUILDING_ORDER_ID = "REBUILDING";

export interface KeysInfo {
  readonly keysId: string;
  readonly name: string;
  readonly exchange: SupportedExchanges;
  readonly canTrade: boolean;
  readonly valid: boolean;
}

export interface AssetShare {
  [asset: string]: number;
}

export type BalanceDivision = ReadonlyArray<AssetShare>;

export interface Order {
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
  readonly commissionAsset: string;
  readonly commissionAmount: number;
  readonly minusAsset: string;
  readonly plusAsset: string;
}

export interface PortfolioDescription {
  name: string;
  strategyName: string;
  strategyDescription: string;
}

export interface PublicPortfolio {
  portfolioId: string;
  description: PortfolioDescription;
  shares: SharesWithChange;
}

export interface LastFixOp {
  time: number;
  from: BalanceDivision;
  target: BalanceDivision;
}
