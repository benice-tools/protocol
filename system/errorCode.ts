export default class ErrorCode extends Error {
  public constructor(message: string, readonly code: Errors|string) {
    super(message);
  }
}

export enum Errors {
  notFound = "notFound",

  unauthorized = "unauthorized",

  invalidKeys = "invalidKeys",

  notEnoughFunds = "notEnoughFunds",
  promoCodeExpired = "promoCodeAlreadyUsed"
}
