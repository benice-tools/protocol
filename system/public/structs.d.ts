import { Errors } from "../errorCode";
export declare class Message {
    uuid: string;
    readonly type: string;
    readonly time: number;
    constructor();
}
export declare class Resultable extends Message {
    static errors: Errors | any;
    result?: any;
}
export declare class Command extends Resultable {
}
export declare class Query extends Resultable {
}
export declare class Event extends Message {
}
