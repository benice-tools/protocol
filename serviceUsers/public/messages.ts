import { OrderNotifications, Session, Theme } from "./structs";
import { Command } from "../../system/public/structs";
import { PublicPortfolio } from "../../serviceExchanger/exchanger/public/structs";
import { Query } from "../../system/public/structs";

export class CommandUsers extends Command {
}

export class CommandUsersRegister extends CommandUsers {
  constructor(readonly session: Session, readonly code?: string) {
    super();
  }

  result?: string; // userId
}

export class CommandUsersUpdateTheme extends CommandUsers {
  constructor(public userId: string, readonly theme: Theme) {
    super();
  }
}

export class CommandUsersUpdateOrderNotifications extends CommandUsers {
  constructor(
    public userId: string,
    public settings: OrderNotifications
  ) {
    super();
  }
}

export class QueryUsers extends Query {
}

export class QueryUsersIdBySession extends QueryUsers {
  constructor(public session: Session) {
    super();
  }

  result?: string; // userId
}

export class QueryUsersSessions extends QueryUsers {
  constructor(public userId: string, readonly sessionType: string) {
    super();
  }

  result?: Session[];
}

export class QueryUsersSession extends QueryUsers {
  constructor(
    readonly userId: string,
    readonly sessionId: string,
    readonly sessionType: string
  ) {
    super();
  }

  result?: Session;
}

export class QueryUsersTheme extends QueryUsers {
  constructor(public userId: string) {
    super();
  }

  result?: Theme;
}

export class QueryUsersNotificationSettings extends QueryUsers {
  constructor(public userId: string) {
    super();
  }

  result?: OrderNotifications;
}
