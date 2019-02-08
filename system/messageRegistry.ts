import { Message, TypeOfMessage } from "./public/structs";

const registry = new Map<string, TypeOfMessage<Message>>();

export function Msg() {
  return function (target: TypeOfMessage<Message>) {
    const name = target.name;
    if (registry.has(name)) {
      throw new Error(`Message with given name "${name}" already registered.`);
    }

    registry.set(name, target);
  };
}

export function fromPlain(msg) {
  if (!msg.type) {
    throw new Error(`Message should have type ${JSON.stringify(msg)}`);
  }

  const M = registry.get(msg.type);

  if (!M) {
    throw new Error(`There is no registered message for given type ${msg.type}.`);
  }

  return Object.assign(new M(), msg);
}

export function getClassByStr(type: string) {
  return registry.get(type);
}
