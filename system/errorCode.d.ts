export default class ErrorCode extends Error {
    readonly code: Errors | string;
    constructor(message: any, code: Errors | string);
}
export declare enum Errors {
    unauthorized = "unauthorized",
    invalidKeys = "invalidKeys",
    notEnoughFunds = "notEnoughFunds"
}
