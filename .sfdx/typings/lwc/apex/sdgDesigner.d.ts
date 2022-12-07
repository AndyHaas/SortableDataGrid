declare module "@salesforce/apex/sdgDesigner.GetNamespace" {
  export default function GetNamespace(): Promise<any>;
}
declare module "@salesforce/apex/sdgDesigner.GetNewFieldOrder" {
  export default function GetNewFieldOrder(param: {SDGRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/sdgDesigner.GetSObjectFields" {
  export default function GetSObjectFields(param: {sObjectType: any, SDGRecordId: any}): Promise<any>;
}
