import { Command } from "../../system/public/structs";
import { PartnerInfo } from "./structs";
import { Query } from "../../system/public/structs";
export declare class CommandPartners extends Command {
}
export declare class CommandBecomePartner extends CommandPartners {
    userId: string;
    constructor(userId: string);
    result: null;
}
export declare class QueryPartners extends Query {
}
export declare class QueryPartnerInfo extends QueryPartners {
    userId: string;
    constructor(userId: string);
    result?: PartnerInfo;
}
