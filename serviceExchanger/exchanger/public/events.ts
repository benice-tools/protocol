import { Event } from "../../../system/public/structs";
import { BalancesWithTime } from "./structs";
import { Order } from "./structs";

export class EventExchangerOrderUpdated extends Event {
  constructor(
    readonly keysId: string,
    readonly order: Order
  ) {
    super();
  }
}

export class EventExchangerBalancesUpdated extends Event {
  constructor(
    readonly keysId: string,
    readonly balanceWithTime: BalancesWithTime
  ) {
    super();
  }
}

export class EventExchangerKeysDeleted extends Event {
  constructor(
    readonly keysId: string
  ) {
    super();
  }
}

export class EventExchangerKeysDeletedNotification extends Event {
  constructor(
    readonly userId: string,
    readonly name: string
  ) {
    super();
  }
}

export class EventExchangerUnsubscribedFromPortfolio extends Event {
  constructor(
    readonly portfolioId: string,
    readonly keysId: string,
    public userId: string
  ) {
    super();
  }
}

export class EventExchangerKeysInvalidatedNotification extends Event {
  constructor(
    readonly keysId: string,
    public userId: string
  ) {
    super();
  }
}
