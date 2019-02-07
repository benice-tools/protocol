// Telegram user
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

export enum Theme {
  dark = "dark",
  bright = "bright",
}

export interface User {
  // each user have a number of active sessions i.e. authentications from different devices or apps,
  // session also can hold additional information such as telegram user info
  sessions: Session[];
  theme: Theme;
  orderNotifications: OrderNotifications;
}
