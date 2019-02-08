import { Command } from "../../system/public/structs";
import { Msg } from "../../system/messageRegistry";
import { PartnerInfo } from "./structs";
import { Query } from "../../system/public/structs";

export class CommandPartners extends Command { }

@Msg()
export class CommandBecomePartner extends CommandPartners {
  constructor(public userId: string) {
    super();
  }

  result: null; // userId
}

export class QueryPartners extends Query { }

@Msg()
export class QueryPartnerInfo extends QueryPartners {
  constructor(public userId: string) {
    super();
  }

  result?: PartnerInfo;
}
