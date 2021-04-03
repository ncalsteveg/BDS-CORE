export interface ScanDomain {
  id: string;
  scanJobId: string; // the customer who owns this domain
  dnsName: string; //the dns entry name for the domain
  status: CustomerDomainStatus; //status of the domain
  discoverySource: string; //the source the domain was acquired from
  portsFounds: number; //the number of ports
  created: Date; //date this record was created
  updated: Date; // date this record was updated
}

export enum CustomerDomainStatus {

}

export function createScanDomain(params: Partial<ScanDomain>) {
  return {} as ScanDomain;
}
