export interface ScanHost {
  id: string;
  scanJobId: string;
  scanDomainId: string;
  status: ScanHostStatus;
  ipAddress: string;
  portsFound: number;
  created: Date;
  updated: Date;

}

export enum ScanHostStatus {

}

export function createScanHost(params: Partial<ScanHost>) {
  return {} as ScanHost;
}
