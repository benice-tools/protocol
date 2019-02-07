// Events can be broadcasted to multiple channels
// Query is just request for the data and should not produce any side effects.
/*
  Commands representing arguments for the actions.
  Simply it is an public interface for other services,
  such as web, telegram, terminal, exchange etc.

  Commands should:
    - Structure data needed for an action to execute.
    - Do simple validations of the data in the constructor:
      types, logic, format, required properties.
    ! Have a simple behavior suitable for serialization
*/
import uuid from "uuid/v4";
import { Errors } from "../errorCode";

export class Message {
  public uuid: string;
  readonly type: string;
  readonly time: number;

  constructor() {
    this.type = this.constructor.name;
    this.uuid = uuid();
    this.time = Date.now();
  }
}

export class Resultable extends Message {
  // possible errors for documentation purposes only
  static errors: Errors | any;

  // possible errors for documentation purposes only
  result?: any;
}

export class Command extends Resultable {
}

export class Query extends Resultable {
}

export class Event extends Message {
}
