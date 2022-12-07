declare module "@salesforce/apex/sdgController.GetNamespace" {
  export default function GetNamespace(): Promise<any>;
}
declare module "@salesforce/apex/sdgController.GetSDGInitialLoad" {
  export default function GetSDGInitialLoad(param: {ParentRecordID: any, SDGTag: any, RelationshipName: any, FieldSetName: any, DefaultPageSize: any}): Promise<any>;
}
declare module "@salesforce/apex/sdgController.getSDGResult" {
  export default function getSDGResult(param: {jsonrequest: any}): Promise<any>;
}
