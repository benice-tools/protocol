import { Msg } from "../../../system/messageRegistry";
import { Event } from "../../../system/public/structs";
import { BalancesWithTime } from "./structs";
import { Order } from "./structs";

@Msg()
export class EventExchangerOrderUpdated extends Event {
  constructor(
    readonly keysId: string,
    readonly order: Order
  ) {
    super();
  }
}

@Msg()
export class EventExchangerBalancesUpdated extends Event {
  constructor(
    readonly keysId: string,
    readonly balanceWithTime: BalancesWithTime
  ) {
    super();
  }
}

@Msg()
export class EventExchangerKeysDeleted extends Event {
  constructor(
    readonly keysId: string
  ) {
    super();
  }
}

@Msg()
export class EventExchangerKeysDeletedNotification extends Event {
  constructor(
    readonly userId: string,
    readonly name: string
  ) {
    super();
  }
}

@Msg()
export class EventExchangerUnsubscribedFromPortfolio extends Event {
  constructor(
    readonly portfolioId: string,
    readonly keysId: string,
    public userId: string
  ) {
    super();
  }
}

@Msg()
export class EventExchangerKeysInvalidatedNotification extends Event {
  constructor(
    readonly keysId: string,
    public userId: string
  ) {
    super();
  }
}
