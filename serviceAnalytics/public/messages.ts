import { Command } from "../../system/public/structs";

export class CommandAnalytics extends Command {}

export class CommandAnalyticsStartButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsSetKeysButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsInputAPIKeys extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsSuccessSetAPIKeys extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsBalanceButton extends CommandAnalytics{
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsStatsButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsPartnerButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsDeleteKeysButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsFixButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsUnfixButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsPercentageButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsPremiumButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsFollowButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsCloneButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsBecomeTraderButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsWalletButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsAddFundsButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

export class CommandAnalyticsPaymentReceived extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}
