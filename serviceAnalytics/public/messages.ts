import { Msg } from "../../system/messageRegistry";
import { Command } from "../../system/public/structs";

export class CommandAnalytics extends Command {}

@Msg()
export class CommandAnalyticsStartButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsSetKeysButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsInputAPIKeys extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsSuccessSetAPIKeys extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsBalanceButton extends CommandAnalytics{
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsStatsButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsPartnerButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsDeleteKeysButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsFixButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsUnfixButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsPercentageButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsPremiumButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsFollowButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsCloneButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsBecomeTraderButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsWalletButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsAddFundsButton extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}

@Msg()
export class CommandAnalyticsPaymentReceived extends CommandAnalytics {
  constructor(public userId: string) {
    super();
  }
}
