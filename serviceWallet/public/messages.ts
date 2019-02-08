// TODO: configure transportation
import { Command } from "../../system/public/structs";
import { Msg } from "../../system/messageRegistry";
import { WalletAddress } from "./structs";
import { Event, Query } from "../../system/public/structs";

export class CommandWallet extends Command {
}

@Msg()
export class CommandWalletCreateAddress extends CommandWallet {
  constructor(public userId: string, readonly currency: string) {
    super();
  }
}

export class QueryWallet extends Query {
}

@Msg()
export class QueryWalletUserBalance extends QueryWallet {
  constructor(public userId: string) {
    super();
  }

  result?: number;
}

@Msg()
export class QueryWalletUserAddress extends QueryWallet {
  constructor(public userId: string, readonly currency: string) {
    super();
  }

  result?: WalletAddress | null;
}

@Msg()
export class EventWalletBalanceNotification extends Event {
  constructor(public userId: string, readonly balance: number) {
    super();
  }
}
