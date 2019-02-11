import { Command } from "../../system/public/structs";
import { WalletAddress } from "./structs";
import { Event, Query } from "../../system/public/structs";

export class CommandWallet extends Command {
}

export class CommandWalletCreateAddress extends CommandWallet {
  constructor(public userId: string, readonly currency: string) {
    super();
  }
}

export class QueryWallet extends Query {
}

export class QueryWalletUserBalance extends QueryWallet {
  constructor(public userId: string) {
    super();
  }

  result?: number;
}

export class QueryWalletUserAddress extends QueryWallet {
  constructor(public userId: string, readonly currency: string) {
    super();
  }

  result?: WalletAddress | null;
}

export class EventWalletBalanceNotification extends Event {
  constructor(public userId: string, readonly balance: number) {
    super();
  }
}
