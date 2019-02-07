import { TypeOfMessage } from "./structs";
import { Message } from "./public/structs";
export declare function Msg(): (target: TypeOfMessage<Message>) => void;
export declare function fromPlain(msg: any): any;
export declare function getClassByStr(type: string): any;
