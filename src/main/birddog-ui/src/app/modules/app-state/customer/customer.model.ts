export interface Customer {
  id: string;
  name: string;
}

export function createCustomer(params: Partial<Customer>) {
  return {} as Customer;
}
