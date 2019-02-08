export default class ErrorCode extends Error {
  public constructor(message, readonly code: Errors|string) {
    super(message);
  }
}

export enum Errors {
  unauthorized = "unauthorized",
  invalidKeys = "invalidKeys",
  notEnoughFunds = "notEnoughFunds"
}
