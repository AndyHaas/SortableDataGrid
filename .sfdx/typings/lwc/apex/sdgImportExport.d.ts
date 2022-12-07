declare module "@salesforce/apex/sdgImportExport.ExportSDG" {
  export default function ExportSDG(param: {Id: any}): Promise<any>;
}
declare module "@salesforce/apex/sdgImportExport.ImportSDG" {
  export default function ImportSDG(param: {payload: any}): Promise<any>;
}
