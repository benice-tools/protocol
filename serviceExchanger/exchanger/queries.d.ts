import { Query } from "../../system/public/structs";
import { InternalKeys, InternalPortfolio, MirroringOrder, PortfolioSubscriptions } from "./structs";
import { SupportedExchanges } from "./public/structs";
export declare class QueryExchanger extends Query {
}
export declare class QueryExchangerValidInternalKeysOrError extends QueryExchanger {
    readonly keysId: string;
    result?: InternalKeys;
    constructor(keysId: string);
}
export declare class QueryExchangerUserIdsByKeys extends QueryExchanger {
    readonly keysId: string;
    result?: string[];
    constructor(keysId: string);
}
export declare class QueryExchangerAllValidInternalKeys extends QueryExchanger {
    readonly exchange: SupportedExchanges;
    result?: InternalKeys[];
    constructor(exchange: SupportedExchanges);
}
export declare class QueryExchangerPortfolioSubscriptions extends QueryExchanger {
    readonly portfolioId: string;
    result?: PortfolioSubscriptions;
    constructor(portfolioId: string);
}
export declare class QueryExchangerPortfolioKeysId extends QueryExchanger {
    readonly portfolioId: string;
    result?: string;
    constructor(portfolioId: string);
}
export declare class QueryExchangerInternalPortfolioByKeys extends QueryExchanger {
    readonly keysId: string;
    result?: InternalPortfolio;
    constructor(keysId: string);
}
export declare class QueryExchangerPortfolioByKeys extends QueryExchanger {
    readonly keysId: string;
    result?: string;
    constructor(keysId: string);
}
export declare class QueryExchangerPortfolioBySubscriptionKeys extends QueryExchanger {
    readonly keysId: string;
    result?: string;
    constructor(keysId: string);
}
export declare class QueryExchangerPortfolioMirroredOrders extends QueryExchanger {
    readonly portfolioId: string;
    readonly portfolioOrderId: string;
    result?: MirroringOrder[];
    constructor(portfolioId: string, portfolioOrderId: string);
}
