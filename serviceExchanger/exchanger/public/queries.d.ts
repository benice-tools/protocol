import { ExtendedBalanceWithTotal } from "./structs";
import { QueryExchanger } from "../queries";
import { KeysInfo, LastFixOp, PortfolioDescription } from "./structs";
export declare class QueryExchangerExtendedBalance extends QueryExchanger {
    readonly keysId: string;
    result?: ExtendedBalanceWithTotal;
    constructor(keysId: string);
}
export declare class QueryExchangerUserKeys extends QueryExchanger {
    userId: string;
    result?: KeysInfo[];
    constructor(userId: string);
}
export declare class QueryExchangerLastFixOperation extends QueryExchanger {
    readonly keysId: string;
    result?: LastFixOp;
    constructor(keysId: string);
}
export declare class QueryExchangerPortfolioNameExist extends QueryExchanger {
    readonly name: string;
    result?: boolean;
    constructor(name: string);
}
export declare class QueryExchangerPublicPortfolios extends QueryExchanger {
    result?: Array<string>;
}
export declare class QueryExchangerPortfolioDescription extends QueryExchanger {
    readonly portfolioId: string;
    result?: PortfolioDescription;
    constructor(portfolioId: string);
}
export declare class QueryExchangerPortfolioBelongsToKeys extends QueryExchanger {
    readonly portfolioId: string;
    readonly keysId: string;
    result?: boolean;
    constructor(portfolioId: string, keysId: string);
}
