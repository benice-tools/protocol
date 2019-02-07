import { BalanceDifference, FromOrderChange, PerDayStats, SharesWithChange } from "./structs";
import { Query } from "../../system/public/structs";
import { ExtendedBalanceWithTotal } from "../../serviceExchanger/exchanger/public/structs";
export declare class QueryStats extends Query {
}
export declare class QueryStatsLastOrderStats extends QueryStats {
    keysId: string;
    result?: FromOrderChange;
    constructor(keysId: string);
}
export declare class QueryStatsBalanceBetweenDifference extends QueryStats {
    keysId: string;
    startTime: number;
    endTime: number;
    result?: BalanceDifference;
    constructor(keysId: string, startTime: number, endTime: number);
}
export declare class QueryStatsLastExtendedBalance extends QueryStats {
    keysId: string;
    result?: ExtendedBalanceWithTotal;
    constructor(keysId: string);
}
export declare class QueryStatsChangeByAsset extends QueryStats {
    keysId: string;
    asset: string;
    result?: number;
    constructor(keysId: string, asset: string);
}
export declare class QueryStatsBalanceChangePerDay extends QueryStats {
    keysId: string;
    startTime: number;
    endTime: number;
    result?: PerDayStats;
    constructor(keysId: string, startTime: number, endTime: number);
}
export declare class QueryStatsIsAssetExist extends QueryStats {
    asset: string;
    result?: boolean;
    constructor(asset: string);
}
export declare class QueryStatsLastBalanceDivisionWithChanges extends QueryStats {
    keysId: string;
    result?: SharesWithChange;
    constructor(keysId: string);
}
export declare class QueryStatsAssetPrice extends QueryStats {
    base: string;
    quote: string;
    result?: number;
    constructor(base: string, quote: string);
}
