export interface ScanJob {
  id: string;
  customerId: string;
  jobStatus: ScanJobStatus;
  scanStarted: Date;
  scanCompleted: Date;
  created: Date;
  updated: Date;
}

export enum ScanJobStatus {

}

export function createScanJob(params: Partial<ScanJob>) {
  return {} as ScanJob;
}
