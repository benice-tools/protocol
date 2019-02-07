import { SupportedExchanges } from "./structs";
import { Command } from "../../../system/public/structs";
import { BalanceDivision, PortfolioDescription } from "./structs";
export declare class CommandExchanger extends Command {
}
export declare class CommandExchangerCreateKeys extends CommandExchanger {
    userId: string;
    readonly name: string;
    readonly exchange: SupportedExchanges;
    readonly publicKey: string;
    readonly secretKey: string;
    result?: string;
    constructor(userId: string, name: string, exchange: SupportedExchanges, publicKey: string, secretKey: string);
}
export declare class CommandExchangerUpdateKeys extends CommandExchanger {
    readonly keysId: string;
    readonly name?: string;
    readonly publicKey?: string;
    readonly secretKey?: string;
    constructor(keysId: string, name?: string, publicKey?: string, secretKey?: string);
}
export declare class CommandExchangerDeleteKeys extends CommandExchanger {
    readonly keysId: string;
    constructor(keysId: string);
}
export declare class CommandExchangerFix extends CommandExchanger {
    readonly keysId: string;
    readonly target: BalanceDivision;
    readonly percent: number;
    constructor(keysId: string, target: BalanceDivision, percent?: number);
}
export declare class CommandExchangerUnfix extends CommandExchanger {
    readonly keysId: string;
    constructor(keysId: string);
}
export declare class CommandExchangerPublishPortfolio extends CommandExchanger {
    readonly keysId: string;
    readonly description: PortfolioDescription;
    constructor(keysId: string, description: PortfolioDescription);
    result?: string;
}
export declare class CommandExchangerDeletePortfolio extends CommandExchanger {
    readonly portfolioId: string;
    constructor(portfolioId: string);
}
export declare class CommandExchangerSubscribeToPortfolio extends CommandExchanger {
    readonly keysId: string;
    readonly portfolioId: string;
    constructor(keysId: string, portfolioId: string);
}
export declare class CommandExchangerUnsubscribeFromPortfolio extends CommandExchanger {
    readonly keysId: string;
    readonly portfolioId: string;
    constructor(keysId: string, portfolioId: string);
}
export declare class CommandExchangerClonePortfolio extends CommandExchanger {
    readonly keysId: string;
    readonly portfolioId: string;
    constructor(keysId: string, portfolioId: string);
}
