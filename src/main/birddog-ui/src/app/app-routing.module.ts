import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BirddogHomeComponent} from "./modules/core/home/birddog-home/birddog-home.component";
import {BirddogScanLiveComponent} from "./modules/core/pages/birddog-scan-live/birddog-scan-live.component";
import {BirddogCustomerComponent} from "./modules/core/pages/birddog-customer/birddog-customer.component";
import {BirddogScanJobsComponent} from "./modules/core/pages/birddog-scan-jobs/birddog-scan-jobs.component";
import {BirddogScanDomainsComponent} from "./modules/core/pages/birddog-scan-domains/birddog-scan-domains.component";
import {BirddogScanHostsComponent} from "./modules/core/pages/birddog-scan-hosts/birddog-scan-hosts.component";
import {BirddogScanHostPortsComponent} from "./modules/core/pages/birddog-scan-host-ports/birddog-scan-host-ports.component";

const routes: Routes = [
  {
    path: '',
    component: BirddogHomeComponent,
    children: [
      {
        path: '',
        data: {allRoles: false},
        component: BirddogScanLiveComponent,
      },
      {
        path: 'customer',
        data: {allRoles: false},
        component: BirddogCustomerComponent,
      },
      {
        path: 'jobs',
        data: {allRoles: false},
        component: BirddogScanJobsComponent,
      },
      {
        path: 'domains',
        data: {allRoles: false},
        component: BirddogScanDomainsComponent,
      },
      {
        path: 'hosts',
        data: {allRoles: false},
        component: BirddogScanHostsComponent,
      },
      {
        path: 'ports',
        data: {allRoles: false},
        component: BirddogScanHostPortsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
