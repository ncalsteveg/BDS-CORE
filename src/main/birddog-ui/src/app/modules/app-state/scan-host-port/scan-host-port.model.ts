export interface ScanHostPort {
  id: string;  //primary key
  scanJobId: string;
  scanHostId: string;
  ipAddress: string;
  portNumber: number;
  protocol: string;
  currentState: string;
  port: Port; //this is the parsed out put from namp, probably need tp enrich
}

export interface Port {
  state: State;
  service: Service;
  protocol: string;
  portid: number;
  text: string;
}

export interface Service {
  cpe: string;
  name: string;
  product: string;
  ostype: string;
  version: string;
  tunnel: string;
  method: string;
  conf: number;
  text: string;
}

export interface State {
  state: string;
  reason: string;
}


export function createScanHostPort(params: Partial<ScanHostPort>) {
  return {} as ScanHostPort;
}
