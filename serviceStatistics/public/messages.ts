import {
  BalanceDifference,
  FromOrderChange,
  PerDayStats,
  SharesWithChange
} from "./structs";
import { Query } from "../../system/public/structs";
import { Msg } from "../../system/messageRegistry";
import { ExtendedBalanceWithTotal } from "../../serviceExchanger/exchanger/public/structs";

export class QueryStats extends Query { }

@Msg()
export class QueryStatsLastOrderStats extends QueryStats {
  result?: FromOrderChange;

  constructor(public keysId: string) {
    super();
  }
}

@Msg()
export class QueryStatsBalanceBetweenDifference extends QueryStats {
  result?: BalanceDifference;

  constructor(public keysId: string, public startTime: number, public endTime: number) {
    super();
  }
}

@Msg()
export class QueryStatsLastExtendedBalance extends QueryStats {
  result?: ExtendedBalanceWithTotal;

  constructor(public keysId: string) {
    super();
  }
}

@Msg()
export class QueryStatsChangeByAsset extends QueryStats {
  result?: number;

  constructor(public keysId: string, public asset: string) {
    super();
  }
}

@Msg()
export class QueryStatsBalanceChangePerDay extends QueryStats {
  result?: PerDayStats;

  constructor(public keysId: string, public startTime: number, public endTime: number) {
    super();
  }
}

@Msg()
export class QueryStatsIsAssetExist extends QueryStats {
  result?: boolean;

  constructor(public asset: string) {
    super();
  }
}

@Msg()
export class QueryStatsLastBalanceDivisionWithChanges extends QueryStats {
  result?: SharesWithChange;

  constructor(public keysId: string) {
    super();
  }
}

@Msg()
export class QueryStatsAssetPrice extends QueryStats {
  result?: number;

  constructor(public base: string, public quote: string) {
    super();
  }
}
