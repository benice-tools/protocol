export interface TgUser {
    tgUserId: string;
    username: string;
    firstName: string;
    lastName: string;
    lang: string;
}
export interface Session {
    type: string;
    sessionId: string;
}
export interface TelegramSession extends Session {
    type: "telegram";
    tgUser: TgUser;
}
export interface WebsocketSession extends Session {
    type: "websocket";
}
export interface OrderNotifications {
    NEW: true;
    PARTIALLY_FILLED: true;
    FILLED: true;
    CANCELED: true;
    REJECTED: true;
}
export declare enum Theme {
    dark = "dark",
    bright = "bright"
}
export interface User {
    sessions: Session[];
    theme: Theme;
    orderNotifications: OrderNotifications;
}
