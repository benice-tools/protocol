import { Command } from "../../system/public/structs";
export declare class CommandAnalytics extends Command {
}
export declare class CommandAnalyticsStartButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsSetKeysButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsInputAPIKeys extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsSuccessSetAPIKeys extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsBalanceButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsStatsButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsPartnerButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsDeleteKeysButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsFixButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsUnfixButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsPercentageButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsPremiumButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsFollowButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsCloneButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsBecomeTraderButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsWalletButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsAddFundsButton extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
export declare class CommandAnalyticsPaymentReceived extends CommandAnalytics {
    userId: string;
    constructor(userId: string);
}
