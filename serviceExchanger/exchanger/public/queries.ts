import { Query } from "../../../system/public/structs";
import {
  ExtendedBalanceWithTotal} from "./structs";
import { KeysInfo, LastFixOp, PortfolioDescription } from "./structs";

export class QueryExchanger extends Query { }

export class QueryExchangerExtendedBalance extends QueryExchanger {
  result?: ExtendedBalanceWithTotal;

  constructor(readonly keysId: string) {
    super();
  }
}

export class QueryExchangerUserKeys extends QueryExchanger {
  result?: KeysInfo[];

  constructor(public userId: string) {
    super();
  }
}

export class QueryExchangerLastFixOperation extends QueryExchanger {
  result?: LastFixOp;

  constructor(
    readonly keysId: string
  ) {
    super();
  }
}

export class QueryExchangerPortfolioNameExist extends QueryExchanger {
  result?: boolean;

  constructor(
    readonly name: string
  ) {
    super();
  }
}

export class QueryExchangerPublicPortfolios extends QueryExchanger {
  result?: Array<string>; // portfolioIds
}

export class QueryExchangerPortfolioDescription extends QueryExchanger {
  result?: PortfolioDescription;

  constructor(readonly portfolioId: string) {
    super();
  }
}

export class QueryExchangerPortfolioBelongsToKeys extends QueryExchanger {
  result?: boolean;

  constructor(
    readonly portfolioId: string,
    readonly keysId: string
  ) {
    super();
  }
}
