import { Message } from "./public/structs";
export declare class MessageMeta {
    readonly agent: "user" | "admin" | "system";
    readonly id: string | null;
    constructor(agent: "user" | "admin" | "system", id: string | null);
}
export interface TypeOfMessage<T extends Message> extends Function {
    new (...args: any[]): T;
}
export declare class Mutation extends Message {
    constructor();
}
