import { KeysInfo, PortfolioDescription } from "./public/structs";
export interface MirroringOrder {
    portfolioId: string;
    portfolioOrderId: string;
    orderId: string;
    symbol: string;
    keysId: string;
}
export interface InternalKeys extends KeysInfo {
    name: string;
    publicKey: string;
    secretKey: string;
    valid: boolean;
    canTrade: boolean;
}
export interface PortfolioSubscriptions {
    [keysId: string]: {
        keysId: string;
        orders: {
            [portfolioOrderId: string]: MirroringOrder;
        };
    };
}
export interface InternalPortfolio {
    keysId: string;
    portfolioId: string;
    description: PortfolioDescription;
    subscriptions: PortfolioSubscriptions;
}
