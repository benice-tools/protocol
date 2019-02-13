import {
  BalanceDifference,
  FromOrderChange,
  PerDayStats,
  SharesWithChange
} from "./structs";
import { Query } from "../../system/public/structs";
import {
  ExtendedBalanceWithTotal,
  PublicPortfolio
} from "../../serviceExchanger/exchanger/public/structs";

export class QueryStats extends Query { }

export class QueryStatsLastOrderStats extends QueryStats {
  result?: FromOrderChange;

  constructor(public keysId: string) {
    super();
  }
}

export class QueryStatsBalanceBetweenDifference extends QueryStats {
  result?: BalanceDifference;

  constructor(public keysId: string, public startTime: number, public endTime: number) {
    super();
  }
}

export class QueryStatsLastExtendedBalance extends QueryStats {
  result?: ExtendedBalanceWithTotal;

  constructor(public keysId: string) {
    super();
  }
}

export class QueryStatsChangeByAsset extends QueryStats {
  result?: number;

  constructor(public keysId: string, public asset: string) {
    super();
  }
}

export class QueryStatsBalanceChangePerDay extends QueryStats {
  result?: PerDayStats;

  constructor(public keysId: string, public startTime: number, public endTime: number) {
    super();
  }
}

export class QueryStatsIsAssetExist extends QueryStats {
  result?: boolean;

  constructor(public asset: string) {
    super();
  }
}

export class QueryStatsLastBalanceDivisionWithChanges extends QueryStats {
  result?: SharesWithChange;

  constructor(public keysId: string, public disableSmallBalance:boolean = false) {
    super();
  }
}

export class QueryStatsAssetPrice extends QueryStats {
  result?: number;

  constructor(public base: string, public quote: string) {
    super();
  }
}

export class QueryStatsPublicPortfolio extends QueryStats {
  result?: PublicPortfolio;

  constructor(readonly portfolioId: string) {
    super();
  }
}

export class QueryStatsPublicPortfolioChangePerDay extends QueryStats {
  result?: PerDayStats;

  constructor(readonly portfolioId: string, public startTime: number, public endTime: number) {
    super();
  }
}
