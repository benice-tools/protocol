import { Msg } from "../../system/messageRegistry";
import { OrderNotifications, Session, Theme } from "./structs";
import { Command } from "../../system/public/structs";
import { PublicPortfolio } from "../../serviceExchanger/exchanger/public/structs";
import { Query } from "../../system/public/structs";

export class CommandUsers extends Command {
}

@Msg()
export class CommandUsersRegister extends CommandUsers {
  constructor(readonly session: Session, readonly code?: string) {
    super();
  }

  result?: string; // userId
}

@Msg()
export class CommandUsersUpdateTheme extends CommandUsers {
  constructor(public userId: string, readonly theme: Theme) {
    super();
  }
}

@Msg()
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

@Msg()
export class QueryUsersIdBySession extends QueryUsers {
  constructor(public session: Session) {
    super();
  }

  result?: string; // userId
}

@Msg()
export class QueryUsersSessions extends QueryUsers {
  constructor(public userId: string, readonly sessionType: string) {
    super();
  }

  result?: Session[];
}

@Msg()
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

@Msg()
export class QueryUsersTheme extends QueryUsers {
  constructor(public userId: string) {
    super();
  }

  result?: Theme;
}

@Msg()
export class QueryUsersNotificationSettings extends QueryUsers {
  constructor(public userId: string) {
    super();
  }

  result?: OrderNotifications;
}

@Msg()
export class QueryUsersPublicPortfolio extends QueryUsers {
  result?: PublicPortfolio;

  constructor(readonly portfolioId: string) {
    super();
  }
}
