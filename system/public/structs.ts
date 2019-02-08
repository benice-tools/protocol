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

export class MessageMeta {
  constructor(
    readonly agent: "user"|"admin"|"system",
    readonly id: string|null
  ) {
    if ((agent === "user" || agent === "admin") && !id) {
      throw new Error("User or admin agent should have id");
    }
  }
}

export interface TypeOfMessage<T extends Message> extends Function {
  new (...args: any[]): T;
}

/*
  Mutations only responsibility is to update state.
  It is actually should be the only way to change state.

  ! Mutations types are serialized and stored in the database.
  ! So they SHOULD CONTAIN ONLY simple json types such as string, number, object and array.

  Mutations must be synchronous, without any side effects and calls to other services.
  Because they persisted in the database and and will be replayed to restore state.

  Guaranteed that this layer single threaded for particular service.
  It is possible to prevent some critical changes via errors here,
  for example, for security reasons or other hardcore cases
  but it's generally bad practice.
*/
export class Mutation extends Message {
  constructor() {
    super();
  }
}
