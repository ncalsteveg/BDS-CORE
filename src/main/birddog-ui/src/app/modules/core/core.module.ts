import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BirddogCustomerComponent} from './pages/birddog-customer/birddog-customer.component';
import {BirddogHomeComponent} from './home/birddog-home/birddog-home.component';
import {ClarityModule} from "@clr/angular";
import {RouterModule} from "@angular/router";
import {BirddogScanLiveComponent} from './pages/birddog-scan-live/birddog-scan-live.component';
import {FormsModule} from "@angular/forms";
import {ScanJobsComponent} from './components/scan-jobs/scan-jobs.component';
import {ScanDomainsComponent} from './components/scan-domains/scan-domains.component';
import {ScanHostsComponent} from './components/scan-hosts/scan-hosts.component';
import {CustomersComponent} from './components/customers/customers.component';
import {BirddogScanJobsComponent} from './pages/birddog-scan-jobs/birddog-scan-jobs.component';
import {BirddogScanDomainsComponent} from './pages/birddog-scan-domains/birddog-scan-domains.component';
import {BirddogScanHostsComponent} from './pages/birddog-scan-hosts/birddog-scan-hosts.component';
import {ScanHostPortsComponent} from './components/scan-host-ports/scan-host-ports.component';
import {BirddogScanHostPortsComponent} from './pages/birddog-scan-host-ports/birddog-scan-host-ports.component';
import {NgxChartsModule} from "@swimlane/ngx-charts";


@NgModule({
  declarations: [BirddogCustomerComponent, BirddogHomeComponent, BirddogScanLiveComponent, ScanJobsComponent, ScanDomainsComponent, ScanHostsComponent, CustomersComponent, BirddogScanJobsComponent, BirddogScanDomainsComponent, BirddogScanHostsComponent, ScanHostPortsComponent, BirddogScanHostPortsComponent],
    imports: [
        CommonModule,
        ClarityModule,
        RouterModule,
        FormsModule,
        NgxChartsModule
    ]
})
export class CoreModule { }
