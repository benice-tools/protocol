import { Event } from "../../../system/public/structs";
import { BalancesWithTime } from "./structs";
import { Order } from "./structs";
export declare class EventExchangerOrderUpdated extends Event {
    readonly keysId: string;
    readonly order: Order;
    constructor(keysId: string, order: Order);
}
export declare class EventExchangerBalancesUpdated extends Event {
    readonly keysId: string;
    readonly balanceWithTime: BalancesWithTime;
    constructor(keysId: string, balanceWithTime: BalancesWithTime);
}
export declare class EventExchangerKeysDeleted extends Event {
    readonly keysId: string;
    constructor(keysId: string);
}
export declare class EventExchangerKeysDeletedNotification extends Event {
    readonly userId: string;
    readonly name: string;
    constructor(userId: string, name: string);
}
export declare class EventExchangerUnsubscribedFromPortfolio extends Event {
    readonly portfolioId: string;
    readonly keysId: string;
    userId: string;
    constructor(portfolioId: string, keysId: string, userId: string);
}
export declare class EventExchangerKeysInvalidatedNotification extends Event {
    readonly keysId: string;
    userId: string;
    constructor(keysId: string, userId: string);
}
