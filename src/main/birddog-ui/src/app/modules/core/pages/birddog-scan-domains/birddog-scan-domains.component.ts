import {Component, HostListener} from '@angular/core';
import {Router} from "@angular/router";
import {ScanHostPort} from "../../../app-state/scan-host-port/scan-host-port.model";
import {HttpClient} from "@angular/common/http";
import {ScanJobQuery} from "../../../app-state/scan-job/scan-job.query";

@Component({
  selector: 'app-birddog-scan-domains',
  templateUrl: './birddog-scan-domains.component.html',
  styleUrls: ['./birddog-scan-domains.component.scss']
})
export class BirddogScanDomainsComponent  {

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    this.router.navigateByUrl("jobs")
  }

  entities: ScanHostPort[] = []

  constructor(private router: Router,
              private http: HttpClient,
              private query: ScanJobQuery) {
  }

  onScanDomainSelected() {
    this.router.navigateByUrl('hosts')
  }

  refresh(): void {

    if(this.query.hasActive()){
      this.http.get<ScanHostPort[]>('api/scan/nmap/' + this.query.getActiveId()).subscribe(result =>{
        this.entities = result;
      })
    }
  }
}
