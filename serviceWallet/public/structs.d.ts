export interface WalletAddress {
    currency: string;
    address: string;
}
export interface WalletAddressTransaction {
    txId: string;
    amount: number;
    address: WalletAddress;
}
export interface BTCAddress extends WalletAddress {
    currency: "BTC";
}
export interface BTCTransaction extends WalletAddressTransaction {
    address: BTCAddress;
}
