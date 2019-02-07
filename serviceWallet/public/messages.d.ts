import { Command } from "../../system/public/structs";
import { WalletAddress } from "./structs";
import { Event, Query } from "../../system/public/structs";
export declare class CommandWallet extends Command {
}
export declare class CommandWalletCreateAddress extends CommandWallet {
    userId: string;
    readonly currency: string;
    constructor(userId: string, currency: string);
}
export declare class QueryWallet extends Query {
}
export declare class QueryWalletUserBalance extends QueryWallet {
    userId: string;
    constructor(userId: string);
    result?: number;
}
export declare class QueryWalletUserAddress extends QueryWallet {
    userId: string;
    readonly currency: string;
    constructor(userId: string, currency: string);
    result?: WalletAddress | null;
}
export declare class EventWalletBalanceNotification extends Event {
    userId: string;
    readonly balance: number;
    constructor(userId: string, balance: number);
}
