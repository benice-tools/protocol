import { OrderNotifications, Session, Theme } from "./structs";
import { Command } from "../../system/public/structs";
import { PublicPortfolio } from "../../serviceExchanger/exchanger/public/structs";
import { Query } from "../../system/public/structs";
export declare class CommandUsers extends Command {
}
export declare class CommandUsersRegister extends CommandUsers {
    readonly session: Session;
    readonly code?: string;
    constructor(session: Session, code?: string);
    result?: string;
}
export declare class CommandUsersUpdateTheme extends CommandUsers {
    userId: string;
    readonly theme: Theme;
    constructor(userId: string, theme: Theme);
}
export declare class CommandUsersUpdateOrderNotifications extends CommandUsers {
    userId: string;
    settings: OrderNotifications;
    constructor(userId: string, settings: OrderNotifications);
}
export declare class QueryUsers extends Query {
}
export declare class QueryUsersIdBySession extends QueryUsers {
    session: Session;
    constructor(session: Session);
    result?: string;
}
export declare class QueryUsersSessions extends QueryUsers {
    userId: string;
    readonly sessionType: string;
    constructor(userId: string, sessionType: string);
    result?: Session[];
}
export declare class QueryUsersSession extends QueryUsers {
    readonly userId: string;
    readonly sessionId: string;
    readonly sessionType: string;
    constructor(userId: string, sessionId: string, sessionType: string);
    result?: Session;
}
export declare class QueryUsersTheme extends QueryUsers {
    userId: string;
    constructor(userId: string);
    result?: Theme;
}
export declare class QueryUsersNotificationSettings extends QueryUsers {
    userId: string;
    constructor(userId: string);
    result?: OrderNotifications;
}
export declare class QueryUsersPublicPortfolio extends QueryUsers {
    readonly portfolioId: string;
    result?: PublicPortfolio;
    constructor(portfolioId: string);
}
