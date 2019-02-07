import { SupportedExchanges } from "./structs";
import { Command } from "../../../system/public/structs";
import { BalanceDivision, PortfolioDescription } from "./structs";

export class CommandExchanger extends Command {
}

export class CommandExchangerCreateKeys extends CommandExchanger {
  result?: string; // keysId

  constructor(
    public userId: string,
    readonly name: string,
    readonly exchange: SupportedExchanges,
    readonly publicKey: string,
    readonly secretKey: string
  ) {
    super();
  }
}

export class CommandExchangerUpdateKeys extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly name?: string,
    readonly publicKey?: string,
    readonly secretKey?: string
  ) {
    super();
  }
}

export class CommandExchangerDeleteKeys extends CommandExchanger {
  constructor(
    readonly keysId: string,
  ) {
    super();
  }
}

export class CommandExchangerFix extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly target: BalanceDivision,
    readonly percent = 100
  ) {
    super();
  }
}

export class CommandExchangerUnfix extends CommandExchanger {
  constructor(
    readonly keysId: string,
  ) {
    super();
  }
}

export class CommandExchangerPublishPortfolio extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly description: PortfolioDescription
  ) {
    super();
  }

  result?: string; // portfolioId
}

export class CommandExchangerDeletePortfolio extends CommandExchanger {
  constructor(
    readonly portfolioId: string
  ) {
    super();
  }
}

export class CommandExchangerSubscribeToPortfolio extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly portfolioId: string
  ) {
    super();
  }
}

export class CommandExchangerUnsubscribeFromPortfolio extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly portfolioId: string,
  ) {
    super();
  }
}

export class CommandExchangerClonePortfolio extends CommandExchanger {
  constructor(
    readonly keysId: string,
    readonly portfolioId: string
  ) {
    super();
  }
}
